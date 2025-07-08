const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const open = require('open');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('YAnalytica API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  open(`http://localhost:${PORT}`); 
});
S