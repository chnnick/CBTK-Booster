import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSite } from '../site/user';
import "./HomePageStyles.css";

export const HomePage = () => {

  const [newUser, setUser] = useState('');
  const { createUser } = useSite();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    const { success, message } = createUser(newUser);
    console.log("Success:", success);
    console.log("Message:", message);
    if (success) {
      navigate("/joined");
    } else {
      alert("Failed to add user: ", message);
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
      <div id="ig-handler">
        <form onSubmit={handleSubmit}>
          <label htmlFor="userEmail">email:</label>
          <input 
            type="text" 
            value={userEmail}
            onChange={(e) => setUser({ ...newUser, email: e.target.value})}
            />
          <button type="submit">get notified</button>
        </form>
      </div>
      <div id="footer">
        <p>limited access</p>
        <p><Link id="link-home" to="/">dreamcore.us</Link></p>
      </div>
    </>
  )
}

export default HomePage;
