import React from "react";
import css from "./ImageCard.module.css";
import { Photo } from "../ImageGallery/ImageGallery.types";

interface ImageCardProps {
  sendItem: Photo;
  handleClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ handleClick, sendItem }) => {
  return (
    <div className={css.listCard}>
      <img
        onClick={() => handleClick(sendItem.urls.regular)}
        src={sendItem.urls.small}
        width={400}
        height={400}
        alt="image"
      />
    </div>
  );
};

export default ImageCard;
