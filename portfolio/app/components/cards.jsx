// components/Card.js
"use client";
import React, { useState } from "react";
import ImageModal from "./ImageModal";

const Card = ({ title, year, description, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-xl cursor-pointer" onClick={handleImageClick}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto cursor-pointer"
        />
        <div className="p-4">
          <h3 className="text-xl font-normal mb-1">
            {title}, <span className="">{year}</span>
          </h3>

          <p className="text-[#BABABA]">{description}</p>
        </div>
      </div>
      {isModalOpen && (
        <ImageModal
          imageSrc={imageSrc}
          alt={title}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Card;
