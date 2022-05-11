require("dotenv").config();

const http = require("http");
const express = require("express");

// Routes
const itemRouter = require("./routes/item");

const app = express();
const server = http.createServer(app);
if (process.env.NODE_ENV === "development") {
  server.listen(process.env.PORT, (err, res) => {
    if (err) return console.log(err);
    console.log("server is listening...");
  });
}
app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.use("/item", itemRouter);
