export const mergeSort = array => {
    if(array.length === 1) return array;
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = mergeSort(array.slice(0, middleIndex));
    const secondHalf = mergeSort(array.slice(middleIndex));

    // do algorithm here T_T
}