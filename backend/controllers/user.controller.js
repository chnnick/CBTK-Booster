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


export const sendMail = (emailRecipient) => {

  var smtpTransport = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525, // 8025, 587 and 25 can also be used.
    auth: {
      user: process.env.SMTP_USER || "USERNAME",
      pass: process.env.SMTP_PASS || "PASSWORD",
    },
  });

  smtpTransport.sendMail({
    from: "noreply@dreamcore.us",
    to: emailRecipient,
    subject: "Your Subject",
    text: "Welcome",
    html: "hello"
  },
    function (error, response) {
      if(error){
        console.log(error);
      } else {
        console.log("Message sent: " + response.message);
      }
    }
  );
}