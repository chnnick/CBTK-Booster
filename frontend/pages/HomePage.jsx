import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSite } from '../site/user';
import "./HomePageStyles.css";
import Footer from '../components/Footer';

export const HomePage = () => {

  const [newUser, setUser] = useState({
    email: ""
  });
  const { createUser } = useSite();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmail = await checkEmail(newUser.email);
    if (!isEmail) {
      alert("Please enter a valid email address."); 
      return;
    }

    const { success, message } = await createUser(newUser);

    if (success) {
      console.log("SUCCESS IN CREATING USER!");
      navigate("/joined");
    } else {
      console.log("ERROR IN CREATING USER!");
    }
  }
  
  // taken from stack overflow https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const checkEmail = (email) => { 
    console.log("checked email" + email);
    const isEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    console.log(!!isEmail);
    return !!isEmail;
  }

  const [typewriterText, setTypewriterText] = useState('');
  const [typewriterStyle, setTypewriterStyle] = useState('styled');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const toType = ["dreamcore.us", "@cutbythekid"];
  
  const writeLoop = async () => {
    let phraseIndex = 0;
    let sleepTime = 100;
    while (true) {
      if (phraseIndex == 1) {
        setTypewriterStyle('styled');
      } else {
        setTypewriterStyle('normal');
      }
      let phrase = toType[phraseIndex];
      for (let i = 0; i <= phrase.length; i++) {
        setTypewriterText(phrase.substring(0, i));
        await(sleep(sleepTime));
      }
      await sleep(4000);
      for (let j = phrase.length; j >= 0; j--) {
        setTypewriterText(phrase.substring(0, j));
        await(sleep(sleepTime));
      }
      phraseIndex += (phraseIndex == 1 ? -1 : 1);
    }
  };

  useEffect(() => {
    writeLoop();
  }, []);
  
  return (
    <>
      <motion.div 
        id="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className={typewriterStyle} id="typewriter">{typewriterText}</span>
        <span id="cursor">|</span>
      </motion.div>

      <div id="email-handler">
        <form id="email-form">
          <motion.label 
            htmlFor="user-email"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: .75 }}
          >
            your email:
          </motion.label>
          
          <motion.input 
            id="user-email"
            type="text" 
            value={newUser.email}
            onChange={(e) => setUser({ ...newUser, email: e.target.value})}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          
          <motion.button 
            onClick={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.25 }}
          >
            get notified
          </motion.button>
        </form>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Footer />
      </motion.div>
    </>
  )
}

export default HomePage;
