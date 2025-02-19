import React from 'react'
import "./JoinSuccessStyles.css"
import { Link } from 'react-router'
import { motion } from 'framer-motion'

const JoinSuccessPage = () => {
  console.log("rendering join success page");
  return (
    <>
      <div id="content">
        <motion.img 
          id="cbtk-img" 
          src="../lake.jpg" 
          alt="Image of Lake Tahoe" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
        </motion.img>
        <motion.p 
          id="thank-msg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We'll be in touch.
        </motion.p>
      </div>
      <div id="footer">
        <p>limited access</p>
        <p><Link id="link-home" to="/">dreamcore.us</Link></p>
      </div>
    </>
  )
}

export default JoinSuccessPage;