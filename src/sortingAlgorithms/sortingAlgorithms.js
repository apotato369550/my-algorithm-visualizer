export function bubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    // do some stuff here
    bubbleSortHelper(array, animations)
    return animations
}

function bubbleSortHelper(array, animations) {
    for(let i = 0; i < array.length - 1; i++) { 
        for (let j = 0; j < array.length - i - 1; j++) {
            const animation = {}
            animation.comparison = [j, j + 1];
            if (array[j] > array[j + 1]) {
                animation.swap = [j, j + 1]
            }
            animations.push(animation)
        }
    }
}

export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations;
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations)
}

function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    let k = startIndex, i = startIndex, j = middleIndex + 1;
    while (i <= middleIndex && j <= endIndex) {
        const animation = {};
        animation.comparison = [i, j];
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animation.swap = [k, auxiliaryArray[i]]
            mainArray[k++] = auxiliaryArray[i++]
        } else {
            animation.swap = [k, auxiliaryArray[j]];
            mainArray[k++] = auxiliaryArray[j++]
        }
        animations.push(animation);
    }
    while (i <= middleIndex) {
        animations.push({
            comparison: [i, i],
            swap: [k, auxiliaryArray[i]]
        });
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIndex) {
        animations.push({
          comparison: [j, j],
          swap: [k, auxiliaryArray[j]],
        });
        mainArray[k++] = auxiliaryArray[j++];
    }
}
