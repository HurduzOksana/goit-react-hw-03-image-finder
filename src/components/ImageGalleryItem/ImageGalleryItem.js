import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, largeImageURL }) => (
    <li
      className={style['ImageGalleryItem']}
      key={id}
      onClick={() => onClick(id)}
    >
      <img
        className={style['ImageGalleryItem-image']}
        src={webformatURL}
        data-source={largeImageURL}
        alt=""
      />
    </li>
  ));
};

export default ImageGalleryItem;
