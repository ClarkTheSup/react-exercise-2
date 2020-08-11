import React from 'react';
import propTypes from 'prop-types';
import '../assets/product_image_placeholder.png';

/* eslint-env node */
class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h3>{this.props.name}</h3>
        <img
          className="itemImage"
          src={
            this.props.src || require('../assets/product_image_placeholder.png')
          }
        />
        <div>
          <p className="price">{this.props.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => this.props.addNum()}
          >
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  name: propTypes.string,
  src: propTypes.string,
  price: propTypes.string,
  addNum: propTypes.func,
};

export default Item;
