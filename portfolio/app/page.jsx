// pages/index.js
"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import { motion } from "framer-motion";
import ContactMe from "./components/ContactMe";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="max-w-7xl mx-auto px-10 bg-[#121213] text-[#FFFFFF]">
      <Navbar />
      <motion.main
        ref={ref}
        className="flex flex-col items-center justify-center min-h-screen py-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl font-normal text-center mb-3"
          variants={itemVariants}
        >
          Hello there, I’m Sidi!
        </motion.h1>
        <motion.p
          className="text-center mb-20 max-w-2xl text-[#BABABA]"
          variants={itemVariants}
        >
          I’m a <span className="text-[#36CAB9]">Graphic designer</span>,
          <span className="text-[#36CAB9]"> UX/UI designer</span> and{" "}
          <span className="text-[#36CAB9]">Front end engineer</span> based in
          Doha, reimagining better products, systems and services for people
          around the world. Let’s connect!
        </motion.p>
        {/* <motion.h1
          className="text-left mb-8 text-2xl py-2"
          variants={itemVariants}
        >
          UX/UI Design
        </motion.h1> */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card
              title="Masdar news website"
              year="2023"
              description="and services for people around the world. Let’s connect!"
              imageSrc="/masdar-image.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="Artist's AI SaaS"
              year="2024"
              description="and services for people around the world. Let’s connect!"
              imageSrc="/artist-ai-image.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="attariq app"
              year="2023"
              description="and services for people around the world. Let’s connect!"
              imageSrc="/attarq-app.png"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card
              title="Qatar university"
              year="2023"
              description="and services for people around the world. Let’s connect!"
              imageSrc="/qu.png"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col text-2xl py-2"
          variants={itemVariants}
        ></motion.div>
      </motion.main>
      <ContactMe />
    </div>
  );
};

export default Home;
