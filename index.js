const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoutes = require("./routes/product.routes");
const cors = require("cors")

app.use(cors())

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

mongoose
  .connect(
    "mongodb+srv://yalemone:wfRGTAUNJNvrejap@backenddb.6erfeea.mongodb.net/Node_API"
  )
  .then(() => {
    console.log("Connected to DB!")
    app.listen(3000, function () {
      console.log(`Server is running on http://localhost:${3000}/`);
    });
  });
