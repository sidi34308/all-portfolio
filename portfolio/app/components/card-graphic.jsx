// components/Card.js
"use client"
import React, { useState } from 'react';
import ImageModal from './ImageModal';

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
      <div onClick={handleImageClick}>
        <img src={imageSrc} alt={title} className="cursor-pointer" />
      </div>
      {isModalOpen && (
        <ImageModal imageSrc={imageSrc} alt={title} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Card;
