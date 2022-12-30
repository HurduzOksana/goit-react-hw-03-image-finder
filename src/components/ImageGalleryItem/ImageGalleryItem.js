import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, tag }) => {
  return images.map(({ id, webformatURL }) => (
    <li key={id} className={style['ImageGalleryItem']}>
      <img
        className={style['ImageGalleryItem-image']}
        src={webformatURL}
        alt={tag}
      />
    </li>
  ));
};

export default ImageGalleryItem;
