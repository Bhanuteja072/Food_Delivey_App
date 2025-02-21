// import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1, // Ensure default value is 0 if itemId does not exist
//         }));
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => {
//             if (!prev[itemId]) return prev; // Avoid updating if item is not in cart
//             const updatedCart = { ...prev };
//             updatedCart[itemId] -= 1;
//             if (updatedCart[itemId] === 0) {
//                 delete updatedCart[itemId]; // Remove item if quantity becomes 0
//             }
//             return updatedCart;
//         });
//     };

//     // useEffect(() => {
//     //     console.log(cartItems);
//     // }, [cartItems]);





//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;



















import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});



    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

    }
    const getTotalCartAmount = () => {
        let toatalAmout = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                toatalAmout += itemInfo.price * cartItems[item];

            }


        }
        return toatalAmout;
    }



    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
