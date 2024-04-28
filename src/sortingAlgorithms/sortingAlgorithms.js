export const getMergeSortAnimations(array) {
    animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations;
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
    if (startIndex == endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animiations)
}

function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    // do stuff here
}

export const mergeSort = (array, startIndex, endIndex, animations = []) => {
    if(array.length === 1) return array;
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array, startIndex, middleIndex, animations);
    const secondHalf = mergeSort(array, middleIndex + 1, endIndex, animations);
    const sortedArray = [];

    let i = 0, j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if(firstHalf[i] < secondHalf[j]) {
            sortedArray.push(firstHalf[i++]);
        } else {
            sortedArray.push(secondHalf[j++]);
        }
    }
    while (i < firstHalf.length) sortedArray.push(firstHalf[i++])
    while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
    return sortedArray;
}