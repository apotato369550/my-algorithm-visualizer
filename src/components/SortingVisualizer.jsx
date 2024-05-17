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
   const animations = SortingAlgorithms.mergeSort(this.state.array)
   const newAnimations = [];
   for (const animation of animations) {
    newAnimations.push(animation.comparison);
    newAnimations.push(animation.comparison);
    newAnimations.push(animation.swap)
   }
   
   for (let i = 0; i < newAnimations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
    const isColorChange = i % 3 !== 2;
    
    if (isColorChange) {
      const [barOneIndex, barTwoIndex] = newAnimations[i];
      const barOneStyle = arrayBars[barOneIndex].style;
      const barTwoStyle = arrayBars[barTwoIndex].style;
      const color = i % 3 === 0 ? 'red' : 'blue';
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * 5);
    } else {
      setTimeout(() => {
        const [barOneIndex, newHeight] = newAnimations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * 5);
    }
   }
  }

  quickSort() {

  }

  heapSort() {

  }

  bubbleSort() {
    const animations = SortingAlgorithms.bubbleSort(this.state.array.slice());
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? 'red' : 'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
  }

  testSortingAlgorithms() {
    for(let i = 0; i < 100; i++) {
      const array = [];
      for(let j = 0; j < this.randomIntFromInterval(1, 1000); j++) {
        array.push(this.randomIntFromInterval(-1000, 1000))
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b)
      const mergeSortedArray = SortingAlgorithms.mergeSort(array.slice())
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
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
        <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithm</button>
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