import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import style from './App.module.css';
const API_KEY = `31697968-406cab2af0ae45e7393df2600`;

export class App extends Component {
  state = {
    images: [],
  };

  handleGetRequest = async event => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchValue.value;
    const BASE_URL = `https://pixabay.com/api/?q=${searchTerm}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const request = await fetch(BASE_URL);
    const response = await request.json();

    this.setState({ images: response.hits });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className={style[`App`]}>
        <Searchbar handleGetRequest={this.handleGetRequest} />
        <ImageGallery>
          <ImageGalleryItem images={this.state.images} />
        </ImageGallery>
      </div>
    );
  }
}
