🚀 TaskFlow — Full Stack Task Management App
A simple, modern and user-friendly Full Stack Task Management Application

Built with ❤️ using React, Node.js, Express.js and MongoDB

✨ About TaskFlow
TaskFlow is a Full Stack Task Management application designed to help users easily create, view, edit and delete their daily tasks.

The project demonstrates how a React frontend communicates with a Node.js + Express backend and stores task data permanently in MongoDB.

🎯 Features

➕ Add Tasks — Create new tasks easily
📋 View Tasks — Display all saved tasks
✏️ Edit Tasks — Update existing tasks
🗑️ Delete Tasks — Remove completed/unwanted tasks
💾 MongoDB Database — Tasks are stored persistently
🔗 REST API — Backend APIs for task operations
⚡ React + Vite — Fast and modern frontend
📱 Clean UI — Simple and user-friendly interface
🔄 Real-time UI Updates — Changes appear immediately

🛠️ Tech Stack

Frontend
⚛️ React.js
⚡ Vite
🎨 CSS

🌐 JavaScript
Backend
🟢 Node.js
🚂 Express.js
🔗 REST API
🌍 CORS

Database
🍃 MongoDB
☁️ MongoDB Atlas
📦 Mongoose

Development Tools
💻 Visual Studio Code
🔥 Git
🐙 GitHub
📮 Postman / Browser API Testing
🏗️ Project Structure

TaskFlow/
│
├── backend/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
🔄 How It Works
             ┌──────────────────┐
             │   React Frontend │
             │      (Vite)      │
             └────────┬─────────┘
                      │
                      │ REST API
                      ▼
             ┌──────────────────┐
             │ Node.js +        │
             │ Express.js       │
             └────────┬─────────┘
                      │
                      │ Mongoose
                      ▼
             ┌──────────────────┐
             │     MongoDB      │
             │   Task Database  │
             └──────────────────┘
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Add a new task
DELETE	/api/tasks/:id	Delete a task
⚙️ Installation & Setup

cd TaskFlow-
 Setup Backend
cd backend
Install dependencies:

npm install
Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
Then start the backend:

node server.js
Backend will run on:

http://localhost:5000
3️⃣ Setup Frontend
Open another terminal:

cd frontend
Install dependencies:

npm install
Start the frontend:

npm run dev
Frontend will run on:

http://localhost:5173
