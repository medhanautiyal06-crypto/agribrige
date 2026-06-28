# AgriBridge 🌾

AgriBridge is an AI-assisted smart agriculture platform designed to support farmers through technology. The platform aims to bridge farmers with modern agricultural solutions such as crop recommendations, disease detection, weather insights, and AI-powered assistance.

---

## Features

* Farmer Management API
* Crop Recommendation Support
* Disease Detection Module
* AI Chatbot Assistance
* Dashboard for Farmers
* Responsive Frontend using React and Vite
* Backend API using Node.js and Express

---

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Framer Motion
* Tailwind CSS

### Backend

* Node.js
* Express.js
* CORS
* Dotenv
* Nodemon

---

## Project Structure

```
agribridge/
│
├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── README.md
```

---

## Backend Setup

### Step 1: Navigate to backend folder

```bash
cd backend
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Create `.env` file

Create a file named `.env` inside the backend folder and add:

```env
PORT=5000
```

### Step 4: Start the backend server

```bash
npm run dev
```

If successful, you should see:

```text
Server running on port 5000
```

---

## API Endpoints

### Get all farmers

```http
GET /api/farmers
```

### Get farmer by ID

```http
GET /api/farmers/:id
```

### Create a new farmer

```http
POST /api/farmers
```

Example Request Body:

```json
{
  "name": "Rahul",
  "location": "Delhi",
  "crop": "Wheat"
}
```

### Update farmer details

```http
PUT /api/farmers/:id
```

### Delete a farmer

```http
DELETE /api/farmers/:id
```

### Search farmers by crop

```http
GET /api/search?crop=Wheat
```

---

## Running Frontend

Navigate to the root folder:

```bash
npm install
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## Running Backend

Navigate to backend folder:

```bash
cd backend
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
```

Create `.env.example`:

```env
PORT=5000
```

---

## Author

Developed as part of the TBI-GEU AI Assisted Full Stack Web Development Internship Program.

---

## License

This project is developed for educational and internship purposes.
