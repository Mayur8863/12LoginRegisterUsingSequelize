const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());

const userRegisterRoutes = require("./routes/userRegisterRouter");
app.use("/users/register",userRegisterRoutes);

const userLoginRoutes = require("./routes/userLoginRouter");
app.use("/users/login",userLoginRoutes);

const server = http.createServer(app);
server.listen(3000,()=>{
    console.log("Server Started");
})