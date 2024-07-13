"use client";
import React, { useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaDribbble } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const ContactMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row md:justify-between items-center justify-center py-10 bg-[#121213] text-[#FFFFFF]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="text-left max-w-xl"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-[#36CAB9] mb-4">
          Let's Connect!
        </h1>
        <p className="text-lg text-[#BABABA] mb-8">
          I'm available for <span className="font-bold">freelance work</span>,
          collaborations, and <span className="font-bold">full-time</span>{" "}
          opportunities. If you have a project in mind or just want to chat
          about design and technology, don't hesitate to get in touch.
        </p>
      </motion.div>
      <motion.div
        className="flex space-x-5"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:example@example.com"
          className="hover:text-[#36CAB9]"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope size={30} className="transition-colors duration-300" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sidi-chaikh-360450219/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#36CAB9]"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin size={30} className="transition-colors duration-300" />
        </motion.a>
        <motion.a
          href="https://github.com/sidi34308"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#36CAB9]"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub size={30} className="transition-colors duration-300" />
        </motion.a>
        <motion.a
          href="https://dribbble.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#36CAB9]"
          variants={iconVariants}
          whileHover={{ scale: 1.1 }}
        >
          <FaDribbble size={30} className="transition-colors duration-300" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
