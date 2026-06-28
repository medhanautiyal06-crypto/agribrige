const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let farmers = [
  {
    id: 1,
    name: "Ramesh",
    location: "Uttarakhand",
    crop: "Rice"
  },
  {
    id: 2,
    name: "Suresh",
    location: "Punjab",
    crop: "Wheat"
  }
];

// GET all farmers
app.get("/api/farmers", (req, res) => {
  res.status(200).json(farmers);
});

// GET farmer by ID
app.get("/api/farmers/:id", (req, res) => {
  const farmer = farmers.find(
    f => f.id === parseInt(req.params.id)
  );

  if (!farmer) {
    return res.status(404).json({
      message: "Farmer not found"
    });
  }

  res.status(200).json(farmer);
});

// POST new farmer
app.post("/api/farmers", (req, res) => {
  const { name, location, crop } = req.body;

  if (!name || !location || !crop) {
    return res.status(400).json({
      message: "Please provide name, location and crop"
    });
  }

  const newFarmer = {
    id: farmers.length + 1,
    name,
    location,
    crop
  };

  farmers.push(newFarmer);

  res.status(201).json(newFarmer);
});

// PUT update farmer
app.put("/api/farmers/:id", (req, res) => {
  const farmer = farmers.find(
    f => f.id === parseInt(req.params.id)
  );

  if (!farmer) {
    return res.status(404).json({
      message: "Farmer not found"
    });
  }

  farmer.name = req.body.name || farmer.name;
  farmer.location = req.body.location || farmer.location;
  farmer.crop = req.body.crop || farmer.crop;

  res.status(200).json(farmer);
});

// DELETE farmer
app.delete("/api/farmers/:id", (req, res) => {
  farmers = farmers.filter(
    f => f.id !== parseInt(req.params.id)
  );

  res.status(204).send();
});

// Search farmer
app.get("/api/search", (req, res) => {
  const crop = req.query.crop;

  const result = farmers.filter(
    f => f.crop.toLowerCase() === crop.toLowerCase()
  );

  res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Internal Server Error"
  });
});