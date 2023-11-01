import express from "express";
import "dotenv/config";
import amenityRouter from "./routes/amenities.js";

const app = express();

// Main body of app
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/amenities", amenityRouter);

// Error handling below

// End
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
