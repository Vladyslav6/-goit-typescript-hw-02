import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ sendPhoto, handleClick }) => {
  return (
    <ul className={css.cards}>
      {sendPhoto.map((item) => (
        <li key={item.id}>
          <ImageCard sendItem={item} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
