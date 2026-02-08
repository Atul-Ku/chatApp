import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { uploadFilesToCloudinary } from "../middleware/cloudinary.js";
import cookieOptions from "../config/cookieOption.js";

const register = async (req, res) => {
  const body = req.body;
  const file = req.file;
  if (!file)
    return res
      .status(400)
      .json({ success: false, message: "Please Upload Avatar" });

  const result = await uploadFilesToCloudinary([file]);

  const avatar = {
    public_id: result[0].public_id,
    url: result[0].url,
  };

  const user = await User.create({
    name: body.name,
    username: body.username,
    password: body.password,
    bio: body.bio,
    avatar: avatar,
  });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  return res.status(200).cookie("chattu-token", token, cookieOptions).json({
    success: true,
    user,
    message: "User created",
  });
};

export default {
  register,
};
