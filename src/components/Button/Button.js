import React from 'react';
import style from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <div>
      <button type="button" className={style['Button']} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
