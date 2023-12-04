const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Read the content of db.json
const dbPath = path.join(__dirname, 'db.json');
const dbContent = fs.readFileSync(dbPath, 'utf-8');
const db = JSON.parse(dbContent);

// Define your routes
app.get('/api/users', (req, res) => {
  res.json(db.users);
});

app.get('/api/products', (req, res) => {
  res.json(db.products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
