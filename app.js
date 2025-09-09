const express = require("express");
const app = express();

const path = require("node:path");
const mainRouter = require("./routes/mainRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`PostGresPrac app- listening on port ${PORT}!`);
});
