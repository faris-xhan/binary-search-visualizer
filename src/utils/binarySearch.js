/**
 * Search in array using Binary Search Algoritm
 * @param {Array} arr => Array to search in.
 * @param {Number} sn => Number to be search.
 * @param {Boolean} isSorted => Flag to check if array is sorted or not.
 */
export const binarySearch = (arr, sn, isSorted) => {
  const meta = [];
  let it = 1;
  let lowerBound = 0;
  let upperBound = arr.length - 1;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);
    meta.push({ lowerBound, upperBound, mid, iteration: it++ });
    if (arr[mid] === sn) return [mid, meta];
    if (sn > arr[mid]) lowerBound = mid + 1;
    else upperBound = mid - 1;
  }

  return [-1, meta];
};
