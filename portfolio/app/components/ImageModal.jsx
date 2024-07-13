// components/ImageModal.js
import React from "react";

const ImageModal = ({ imageSrc, alt, onClose }) => {
  return (
    <div
      className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={onClose}
    >
      <img src={imageSrc} alt={alt} className="max-w-[80%] max-h-[80%]" />
    </div>
  );
};

export default ImageModal;
