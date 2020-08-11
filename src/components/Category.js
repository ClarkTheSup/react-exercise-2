import React from 'react';
import Item from './Item';
import propTypes from 'prop-types';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      myCategory: this.props.catName,
    };
  }
  render() {
    const myItems = this.state.data.filter(
      (item) => item.category == this.state.myCategory
    );
    //debugger;
    return (
      <div className="category">
        <h2>{this.props.catName}</h2>
        {myItems.map((item) => (
          <Item
            name={item.name}
            price={item.price}
            key={item.name}
            addNum={this.props.addNum}
          />
        ))}
      </div>
    );
  }
}

Category.propTypes = {
  catName: propTypes.string,
  data: propTypes.object,
  myCategory: propTypes.string,
  addNum: propTypes.func,
};

export default Category;
