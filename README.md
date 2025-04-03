# Food Delivery App

This is a full-stack Food Delivery Web Application that allows users to browse food items, place orders, and manage their cart. It features an **admin panel** for managing food listings and orders.

## 🌍 Live Demo

You can access the deployed version here: **https://food-delivey-frontend.onrender.com**

## 🏗️ Project Structure

```
└── bhanuteja072-food_delivey_app/
    ├── README.md
    ├── admin/
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── vite.config.js
    │   ├── public/
    │   └── src/
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── assets/
    │       │   └── assets.js
    │       ├── components/
    │       │   ├── Navbar/
    │       │   │   ├── Navbar.css
    │       │   │   └── Navbar.jsx
    │       │   └── Sidebar/
    │       │       ├── Sidebar.css
    │       │       └── Sidebar.jsx
    │       └── pages/
    │           ├── Add/
    │           │   ├── Add.css
    │           │   └── Add.jsx
    │           ├── List/
    │           │   ├── List.css
    │           │   └── List.jsx
    │           └── Orders/
    │               ├── Orders.css
    │               └── Orders.jsx
    ├── backend/
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   └── uploads/
    └── frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── vite.config.js
        ├── .gitignore
        ├── public/
        └── src/
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── components/
            ├── Context/
            └── pages/
```

## 🚀 Features
- **User Dashboard**: Browse food items, add to cart, and place orders.
- **Admin Panel**: Manage food listings and order tracking.
- **Secure Authentication**: User login/signup.
- **Responsive UI**: Optimized for mobile and desktop.

## 🛠️ Technologies Used
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, Vite, Tailwind CSS
- **Authentication**: JWT-based authentication
- **Database**: MongoDB Atlas

## 🔧 Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/food_delivery_app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd bhanuteja072-food_delivey_app
   ```
3. Install dependencies for backend and frontend:
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```
4. Set up your `.env` file with required environment variables.
5. Run the backend:
   ```sh
   cd backend && npm start
   ```
6. Run the frontend:
   ```sh
   cd frontend && npm run dev
   ```
7. Open the browser and go to `http://localhost:5173`

## 📜 License
This project is licensed under the MIT License.

---

🔗 **Connect with Me:** [https://github.com/Bhanuteja072]

