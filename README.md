Tech Stack

Node.js

Express.js

MongoDB (with Mongoose)

Multer (for file uploads if needed)

Installation

Navigate to the backend folder:

cd server

Install dependencies:

npm install

Start the backend server:

npm start

API Endpoints

Employee APIs

Method

Endpoint

Description

GET

/employees

Get all employees

POST

/employees

Create an employee

PUT

/employees/:id

Update an employee

DELETE

/employees/:id

Delete an employee

Leave APIs

Method

Endpoint

Description

GET

/leaves

Get all leave requests

POST

/leaves

Create a leave request

PATCH

/leaves/:id/approve

Approve a leave request

PATCH

/leaves/:id/reject

Reject a leave request

Folder Structure

server/
│── models/         # Mongoose schemas
│── routes/         # Express route handlers
│── controllers/    # Business logic for API endpoints
│── config/         # Database & other configurations
│── server.js       # Entry point of the backend
│── package.json

Environment Variables

Create a .env file in the server/ directory and add:

PORT=5000
MONGO_URI=mongodb+srv://your-database-url
JWT_SECRET=your-secret-key

Running the Full Application

Start the backend server:

cd server
npm start

Start the frontend React app:

cd client
npm start

Open https://hrms-section-frontend.vercel.app/ in your browser.