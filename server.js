require('dotenv').config();
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello, this is the 1st, server route");
});

//Serves static assets if in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
