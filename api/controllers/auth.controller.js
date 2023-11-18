import User from "../models/model.user.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(200).json("created new user completed!!!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
