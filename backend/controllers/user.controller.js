import User from "../models/user.model.js";

export const addUser = async (req, res) => {

  const email = req.body;
  
  const newUser = new User(email);

  try {
    await newUser.save();
    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    console.error("Error saving new user");
    res.status(500).json({success: false, message: "Could not save new user"});
  }
}