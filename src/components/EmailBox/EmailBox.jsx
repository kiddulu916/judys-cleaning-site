"use client";

import React from 'react';
import { LuMail } from 'react-icons/lu';
import './EmailBox.css';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animations';


const EmailBox = () => {
  return (
    <motion.div 
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailBox"
    >

        {/* Icon */}
        <motion.div
          variants={containerVariants(0.6)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true,
          }}
        >

            <LuMail size={30} color='grey' />
        </motion.div>

        {/* Input */}
        <motion.input
          variants={containerVariants(0.7)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true,
          }}
          type="email" 
          placeholder='Enter Email' 
        />

        {/* Contact Button */}
        <motion.div 
          variants={containerVariants(0.9)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true,
          }}
          className="quoteButton"
        >
          get quote
        </motion.div>
    </motion.div>
  )
}

export default EmailBox
