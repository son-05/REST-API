📚 Books REST API (Node.js + Express)

This project is a simple REST API to manage a list of books. It allows you to perform basic CRUD operations like viewing, adding, updating, and deleting books. Data is stored in memory (array) without using any database.

🛠️ Technologies Used

Node.js

Express.js

Postman (for testing)

📦 Project Setup

1️⃣ Clone or download the project
2️⃣ Install Node.js if not already installed
3️⃣ Install dependencies

npm install


4️⃣ Run the server

node server.js


5️⃣ Server runs on:

http://localhost:3000

🚀 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
POST	/books	Add a new book
PUT	/books/:id	Update a book by ID
DELETE	/books/:id	Delete a book by ID
