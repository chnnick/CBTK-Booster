import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    console.log("SUBMITTED!");
    console.log("Email = " + newUser.email);
    const { success, message } = createUser(newUser);
    console.log("Success:", success);
    console.log("Message:", message);
    if (success) {
      console.log("SUCCESS!");
      navigate("/joined");
    } else {
      console.log("ERROR!");
    }
  }

  const [typewriterText, setTypewriterText] = useState('');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const toType = ["dreamcore.us", "@cutbythekid"];
  
  const writeLoop = async () => {
    let phraseIndex = 0;
    let sleepTime = 100;
    while (true) {
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
      <div id="header">
        <span id="typewriter">{typewriterText}</span><span id="cursor">|</span>
      </div>
      <div id="email-handler">
        <form id="email-form">
          <label htmlFor="user-email">email:</label>
          <input 
            id="user-email"
            type="text" 
            value={newUser.email}
            onChange={(e) => setUser({ ...newUser, email: e.target.value})}
            />
          <button onClick={handleSubmit}>get notified</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default HomePage;
