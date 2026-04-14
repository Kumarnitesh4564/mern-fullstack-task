# 🚀 MERN Full Stack Project (Task 2)

## 📌 Project Overview

This is a full-stack MERN (MongoDB, Express, React, Node.js) application built as part of an internship task.
The project demonstrates complete CRUD functionality with a React frontend integrated with an Express backend API.

---

## Tech Stack

### 🔹 Frontend

* React.js
* Axios
* React Router DOM

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## ✨ Features

* 📦 View all products
* ➕ Add new product
* ❌ Delete product
* 🔍 View product details
* 🔄 API integration with backend
* 🔗 Client-side routing using React Router

---

## 📁 Project Structure

```
Task2/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── public/
```

---

## ⚙️ Installation & Setup

### 🔹 Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/mern-fullstack-task.git
cd mern-fullstack-task
```

---

### 🔹 Backend Setup

```
cd backend
npm install
npm start
```

👉 Runs on: `http://localhost:3000`

---

### 🔹 Frontend Setup

```
cd frontend
npm install
npm start
```

👉 Runs on: `http://localhost:3001`

---

## 🔗 API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get all products |
| POST   | /api/products     | Create product   |
| PUT    | /api/products/:id | Update product   |
| DELETE | /api/products/:id | Delete product   |

---

## 🧪 Testing

* Add a product → Check if it appears
* Delete a product → Verify removal
* Navigate between pages → No reload
* Test API using browser/Postman

---

## ⚠️ Notes

* Make sure MongoDB is running
* Ensure correct API base URL in frontend
* Enable CORS in backend

---

## 📸 Output

* Fully functional React UI
* Backend API integration
* Dynamic data rendering

---

## 👨‍💻 Author

**Nitesh Kumar**

---

## 🎯 Conclusion

This project demonstrates practical implementation of:

* React Hooks (useState, useEffect)
* REST API integration
* Full-stack development workflow

