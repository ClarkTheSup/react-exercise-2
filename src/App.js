import React, { Component } from 'react';
import './App.scss';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      num: 0,
      addNum: () => {
        this.setState({
          num: this.state.num + 1,
        });
      },
    };
    fetch('http://127.0.0.1:3000/products')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    const data = this.state.data;
    const catList = new Set();
    data.forEach((cat) => catList.add(cat.category));

    return (
      <main className="app">
        <div className="navigation">
          <h1>Store</h1>
          <div className="cartIcon">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-cart-dash"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
              />
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
            <span className="badge badge-secondary">{this.state.num}</span>
          </div>
        </div>
        {Array.from(catList).map((cat) => (
          <Category
            catName={cat}
            key={cat}
            data={data}
            addNum={this.state.addNum}
          />
        ))}
      </main>
    );
  }
}

export default App;
