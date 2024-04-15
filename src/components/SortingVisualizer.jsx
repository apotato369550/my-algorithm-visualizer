import React from 'react';
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  randomIntFromInterval(min, max) {
    Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(this.randomIntFromInterval(5, 1000));
    }
    this.useState({ array });
  }

  render() {
    const { array } = this.state;

    return (
      <>
        {array.map((value, idx) => {
          <div className="array-bar" key={idx}>
            {value}
          </div>;
        })}
      </>
    );
  }
}