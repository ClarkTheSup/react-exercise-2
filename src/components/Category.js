import React from 'react';
import Item from './Item';
import propTypes from 'prop-types';

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <h2>{this.props.catName}</h2>
        <Item name="iPhone1" src="" price="5999" />
        <Item name="iPhone1" src="" price="5999" />
        <Item name="iPhone1" src="" price="5999" />
      </div>
    );
  }
}

Category.propTypes = {
  catName: propTypes.string,
};

export default Category;
