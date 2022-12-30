import React from 'react';
import style from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={style['ImageGallery']}>{children}</ul>;
};

export default ImageGallery;
