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
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      let randomInteger = this.randomIntFromInterval(5, 1000);
      array.push(randomInteger);
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
  
    return (
      <>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{height: `${value}px`}}>
          </div>
        ))}
      </>
    );
  }
}