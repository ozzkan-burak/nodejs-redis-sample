require("express-async-errors");
const mongoose = require("mongoose");
const express = require('express');
const helmet = require('helmet');
const Models = require('./mongodb/index.js');

const RouterFns = require("./routes/index.js");
const app = express();

const router = express.Router();

RouterFns.forEach((routerFn, index)=> {
  routerFn(router);
});

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
  limit: '1mb',
}));

// app.get('/test', async (req, res) => {
//   res.json({
//     test: "succesful",
//     createdAt: new Date().toUTCString()
//   })
// });

app.use("/api", router);

const PORT = 5000;

mongoose.connect("mongodb+srv://redis:bndVUvKamzagYfrh@redis-edu.suqnh0q.mongodb.net/?retryWrites=true&w=majority").then(()=>{
  console.log("MONGODB CONNECTED");
}).catch(err => {
  console.log(err);
})

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});