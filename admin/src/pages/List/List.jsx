// import React, { useEffect, useState } from 'react'
// import './List.css'
// import axios from 'axios'
// import {toast} from 'react-toastify'

// const List = () => {

//     const url = 'http://localhost:4000';

//     const [list,setList] = useState([]);

//     const fetchList = async ()=>{
//         const response = await axios.get(`${url}/api/food/list`);
//         console.log(response.data);
//         console.log("Fetched Data:", response.data);

//         if(response.data.success){
//             setList(response.data.data);
//         }
//         else{
//             toast.error("Error")
//         }
//     }
//     useEffect(()=>{
//         fetchList();
//     },[])



//   return (
//     <div className='list add flex-col'>
//         <p>All Foods list</p>
//         <div className="list-table">
//             <div className="list-table-format title">
//                 <b>Image</b>
//                 <b>Name</b>
//                 <b>Category</b>
//                 <b>Price</b>
//                 <b>Action</b>
//             </div>
//             {list.map((item,index)=>{
//                 return(
//                     <div key={index} className='list-table-format'>
//                         <img src={`${url}/images/`+ item.image} alt="" />
//                         <p>{item.name}</p>
//                         <p>{item.category}</p>
//                         <p>${item.price}</p>
//                         <p>X</p>

//                     </div>

//                 )
//             })}

//         </div>
      
//     </div>
//   )
// }

// export default List

















import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {

    // const url = 'http://localhost:4000';

    const [list,setList] = useState([]);

    const fetchList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`)
        // console.log(response.data)
        // console.log("Fetched Data:", response.data)

        if(response.data.success){
            setList(response.data.data);
        }
        else{
            toast.error("Failed to fetch data");
        }
    }


    const removeFood = async(foodId)=>{
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
        await fetchList();
        if(response.data.success){
            toast.success("Food removed");
        }
        else{
            toast.error("Failed to remove food");
        }
    }




    
    
    useEffect(()=>{
        fetchList();
    },[])



  return (
    <div className='list add flex-col'>
        <p>All Foods list</p>
        <div className="list-table">
            <div className="list-table-format title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {list.map((item,index)=>{
                return(
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/`+ item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>

                    </div>

                )

            })}

        </div>
      
    </div>
  )
}

export default List