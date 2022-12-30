import React from 'react';
import style from './Searchbar.module.css';

const Searchbar = props => {
  return (
    <header className={style[`Searchbar`]}>
      <form className={style['SearchForm']} onSubmit={props.handleGetRequest}>
        <button type="submit" className={style['SearchForm-button']}>
          <span className={style['SearchForm-button-label']}>Search</span>
        </button>
        <input
          className={style['SearchForm-input']}
          type="text"
          name="searchValue"
          placeholder="Search images..."
        ></input>
      </form>
    </header>
  );
};

export default Searchbar;
