import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import style from './App.module.css';
const API_KEY = `31697968-406cab2af0ae45e7393df2600`;

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    modalOpen: false,
    largeImage: '',
  };

  handleGetRequest = async event => {
    event.preventDefault();
    const searchTerm = event.target.elements.searchValue.value;
    const BASE_URL = `https://pixabay.com/api/?q=${searchTerm}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const request = await fetch(BASE_URL);
    const response = await request.json();

    this.setState({
      page: 1,
      loading: false,
      error: null,
      images: response.hits,
    });
  };

  openModal = largeImage => {
    this.setState({
      modalOpen: true,
      largeImage,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  render() {
    const { openModal, closeModal } = this;
    const { modalOpen, largeImageURL, isLoading, images } = this.state;

    return (
      <div className={style[`App`]}>
        {modalOpen && (
          <Modal close={closeModal} largeImageURL={largeImageURL} />
        )}
        <Searchbar handleGetRequest={this.handleGetRequest} />
        <ImageGallery>
          <ImageGalleryItem
            images={this.state.images}
            onClick={openModal}
          ></ImageGalleryItem>
        </ImageGallery>
        {!isLoading && images.length > 0 && (
          <Button onLoadMore={this.loadMore} />
        )}
      </div>
    );
  }
}
