const express = require('express');

const app = express();

app.get('/test', async (req, res) => {
  res.json({
    test: "succesful",
    createdAt: new Date().toUTCString()
  })
});

const PORT = 5000;

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});