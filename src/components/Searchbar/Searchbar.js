import React, { Component } from 'react';

import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const query = e.target.value;
    this.setState({
      query,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const query = this.state.query;
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles['SearchForm-button']}>
              <span className={styles['SearchForm-button-label']}>Search</span>
            </button>

            <input
              className={styles['SearchForm-input']}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images..."
              onChange={this.handleChange}
              value={query}
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  onChangeQuery: PropTypes.func.isRequired,
};

export default Searchbar;
