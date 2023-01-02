import { Component } from 'react';
import style from './Modal.module.css';

class Modal extends Component {
  closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.close();
    }
  };
  render() {
    const { largeImageURL } = this.props;
    const { closeModal } = this;

    return (
      <div className={style['Overlay']} onClick={closeModal}>
        <div className={style['Modal']} onClick={closeModal}>
          <img src={largeImageURL} alt="sdsgs" />
        </div>
      </div>
    );
  }
}

export default Modal;
