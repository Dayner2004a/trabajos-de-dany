// no recursivo 

function bubbleSort(arr) {
    const n = arr . length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j] , arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
  return arr;
}

// recursivo 

function bubbleSortRecursive(arr) {
    if (arr.length === 1) {
        return arr;
    }
    for (let i = 0; i < arr. length - 1; i ++) {
        if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return bubbleSortRecursive.slice(arr.slice(0, -1)).concat(arr[arr.lenght - 1]);
}