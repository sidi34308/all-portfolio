// components/Navbar.js
"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full py-4 flex justify-between items-center text-[#BABABA] relative">
      <div className="text-xl hover:text-[#36CAB9]">Sidi Chaikh</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          ☰
        </button>
      </div>
      <motion.div className="hidden md:flex space-x-8">
        <a
          href="#contact"
          className={`hover:text-white ${
            pathname == "/graphic design" ? "text-white" : "text-[#BABABA]"
          }`}
        >
          Contact
        </a>
        <a
          href="/"
          className={`hover:text-white ${
            pathname == "/" ? "text-white" : "text-[#BABABA]"
          }`}
        >
          Work
        </a>
        <a
          href="/about"
          className={`hover:text-white ${
            pathname == "/about" ? "text-white" : "text-[#BABABA]"
          }`}
        >
          About
        </a>
        <a
          href="https://drive.google.com/file/d/1M2ufEaIYh2SJRznL5a88CfyiTzVfeW2l/view?usp=sharing"
          className={`hover:text-white ${
            pathname == "/resume" ? "text-white" : "text-[#BABABA] hover:white"
          }`}
        >
          Resume
        </a>
      </motion.div>
      {isOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-[#121213] flex flex-col items-center space-y-4 py-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a
            href="#contact"
            className={`hover:text-white ${
              pathname == "/graphic design" ? "text-white" : "text-[#BABABA]"
            }`}
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            href="/"
            className={`hover:text-white ${
              pathname == "/" ? "text-white" : "text-[#BABABA]"
            }`}
            onClick={toggleMenu}
          >
            Work
          </a>
          <a
            href="/about"
            className={`hover:text-white ${
              pathname == "/about" ? "text-white" : "text-[#BABABA]"
            }`}
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="https://drive.google.com/file/d/1M2ufEaIYh2SJRznL5a88CfyiTzVfeW2l/view?usp=sharing"
            className={`hover:text-white ${
              pathname == "/resume"
                ? "text-white"
                : "text-[#BABABA] hover:white"
            }`}
            onClick={toggleMenu}
          >
            Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
