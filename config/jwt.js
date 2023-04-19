import jwt from "jsonwebtoken";

export const generatetoken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
