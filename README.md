Food Delivery App

This is a full-stack food delivery application built with React, Node.js, Express, and MongoDB.

Features
- User authentication (login/register)
- Browse food items and categories
- Add items to the cart
- Place orders
- Admin panel for managing orders and food items
- Responsive design for mobile and desktop

Project Structure
├── admin/         # Admin dashboard for managing the app
├── backend/       # Backend server (Node.js, Express, MongoDB)
├── frontend/      # User-facing frontend (React, Vite)
Admin Panel
- Built with React and Vite
- Manages food items, orders, and users

Backend
- Built with Node.js, Express, and MongoDB
- Implements authentication and order management
- API routes for users, orders, food items, and cart

 Frontend
- Built with React and Vite
- User authentication and order placement
- Cart functionality and real-time updates

Installation

  Preequisites
    -Make sure you have Node.js and MongoDB installed on your system.

Clone the repository
git clone https://github.com/your-username/bhanuteja072-food_delivery_app.git
cd bhanuteja072-food_delivery_app


Install dependencies
Backend

-cd backend
-npm install


Frontend

-cd ../frontend
-npm install

Admin Panel
-cd ../admin
npm install


Running the Application
-Start Backend Server
--cd backend
--npm run server

Start Frontend
-cd frontend
-npm run dev

Start Admin Panel
-cd admin
-npm run dev


Environment Variables
Create a `.env` file in the `backend/` folder and configure the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY
PORT=5000

API Endpoints
| Endpoint          | Method | Description              |
|------------------|--------|--------------------------|
| `/api/users`      | GET    | Get all users            |
| `/api/foods`      | GET    | Get all food items       |
| `/api/cart`       | POST   | Add to cart              |
| `/api/orders`     | POST   | Place an order           |

Contributing
-Feel free to open issues and submit pull requests.


