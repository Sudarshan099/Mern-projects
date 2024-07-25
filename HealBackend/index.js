

// mongoose
//   .connect("mongodb://127.0.0.1:27017/test")
//   .then(() => console.log("Connected!"));

// // const math = require("./math");
// // const fsmodule = require("./fsmodule");

// // let sum = math.add(8, 8);
// // console.log(sum);

// // let diff = math.sub(60, 57);
// // console.log(diff);

// // fsmodule;

// // const http = require("http");
// // const server = http.createServer((req, res) => {
// //   res.writeHead(200, { "Content-Type": "text/html" });
// //   res.write("hello griffin");
// //   res.end();
// // });
// // server.listen(3000, () => {
// //   console.log("server is running");
// // });


// app.get("/", (req, res) => {
//   res.send("hello sudarshan");
// });

// const users = [
//   { id: 1, name: "sudrashan" },
//   { id: 2, name: "Griffin" },
// ];

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/getUsers/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = users.find((user) => user.id === id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send("User not Found");
//   }
// });



const express = require("express");
const connectDB = require("./src/config/db");
const userProfileRoutes = require("./src/Routers/userProfileRoutes");
const authRoutes = require("./src/Routers/authRoute");
require("dotenv").config();
const app = express();
const port = 5000;

connectDB();
app.use(express.json());

app.use('/user',userProfileRoutes);
app.use('/api/auth/', authRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


