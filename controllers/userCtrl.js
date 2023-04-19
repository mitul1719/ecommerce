import UserModel from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import _ from "lodash";
import { generatetoken } from "../config/jwt.js";

export const createUser = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  const userExists = await UserModel.findOne({ email });
  if (!userExists) {
    const newUser = await UserModel.create(req.body);
    res.status(200).json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && (await user.isPasswordMatched(password)) && user?.id) {
    const { id } = user;

    res.json({
      token: generatetoken(id),
      ...user._doc,
    });
  } else {
    throw new Error("Invalid Creds");
  }
});
