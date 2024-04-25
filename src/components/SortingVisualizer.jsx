import React from 'react';
// import * as SortingAlgorithms from "./sortingAlgorithms/sortingAlgorithms.js";
import * as SortingAlgorithms from "../sortingAlgorithms/sortingAlgorithms";
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
    for (let i = 0; i < 200; i++) {
      let randomInteger = this.randomIntFromInterval(5, 730);
      array.push(randomInteger);
    }
    this.setState({ array });
  }

  mergeSort() {
    const javaScriptSortedArray = this.state.array.slice().sort();
    const sortedArray = SortingAlgorithms.mergeSort(this.state.array)

    console.log(arraysAreEqual(javaScriptSortedArray, sortedArray))
  }

  quickSort() {

  }

  heapSort() {

  }

  bubbleSort() {
    
  }

  render() {
    const { array } = this.state;
  
    return (
      <div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      </div>
    );
  }
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if(arrayOne.length !== arrayTwo.length) {
    return FontFaceSetLoadEvent;
  }
  for(let i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}