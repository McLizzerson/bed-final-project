import express from "express";
import "dotenv/config";
import amenityRouter from "./routes/amenities.js";
import userRouter from "./routes/users.js";
import hostRouter from "./routes/hosts.js";

const app = express();

// Main body of app
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/users", userRouter);
app.use("/amenities", amenityRouter);
app.use("/hosts", hostRouter);

// Error handling below

// End
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
