const express = require("express");
const app = express();
const cors = require('cors');
require("./connect/connect");
const auth = require("./routes/auth.js");
const list = require("./routes/list.js");

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Hi");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(3000, () => {
    console.log("Server started successfully");
});