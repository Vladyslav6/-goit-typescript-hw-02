import React from "react";
import css from "./ImageCard.module.css";
const ImageCard = ({ handleClick, sendItem }) => {
  return (
    <div className={css.listCard}>
      <img
        onClick={() => handleClick(sendItem.urls.regular)}
        src={sendItem.urls.small}
        width={400}
        height={400}
      />
    </div>
  );
};

export default ImageCard;
