require("express-async-errors");
const express = require('express');
const helmet = require('helmet');
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

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
});