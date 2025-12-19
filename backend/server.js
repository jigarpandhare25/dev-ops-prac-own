const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Form route
app.post("/api/form", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received:", name, email, message);

  res.json({ message: "Form submitted successfully!" });
});

// 🚨 THIS IS MANDATORY
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
