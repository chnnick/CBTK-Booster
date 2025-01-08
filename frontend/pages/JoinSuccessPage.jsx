import React from 'react'
import "./JoinSuccessStyles.css"
import { Link } from 'react-router';

const JoinSuccessPage = () => {
  console.log("rendering join success page");
  return (
    <>
      <div id="content">
        <img id="cbtk-img" src="../lake.jpg" alt="Image of Lake Tahoe"/>
        <p id="thank-msg">We'll be in touch.</p>
      </div>
      <div id="footer">
        <p>limited access</p>
        <p><Link id="link-home" to="/">dreamcore.us</Link></p>
      </div>
    </>
  )
}

export default JoinSuccessPage;