const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server v2!" });
});

// Example GET route with parameter
app.get("/hello/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

// Example POST route
app.post("/api/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully",
    data: data,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
