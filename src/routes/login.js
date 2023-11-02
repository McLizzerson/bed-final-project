import express from "express";
import userData from "../data/users.json" assert { type: "json" };
import jwt from "jsonwebtoken";

const loginRouter = express.Router();

loginRouter.post("/", (req, res, next) => {
  const secretKey = process.env.AUTH_SECRET_KEY || "my-secret-key";
  const { username, password } = req.body;
  const { users } = userData;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    console.log("oops user is not found!");
  }

  const token = jwt.sign({ userId: user.id }, secretKey);
  res.status(200).json({ message: "Succesfully logged in!", token });
});

export default loginRouter;
