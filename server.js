const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let registrations = [];

app.post('/api/register', (req, res) => {
  const { name, email, classTitle } = req.body;
  if (!name || !email || !classTitle) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }
  registrations.push({ name, email, classTitle });
  res.status(201).json({ message: 'Registered successfully!' });
});

app.get('/api/registrations', (req, res) => {
  res.json(registrations);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
