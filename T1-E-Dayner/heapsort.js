// Heapsort Normal

function Heapsort(arr) {
    let n = arr,lenggth;

    for (let i = math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {

        [arr[0], arr[i]] = [arr[i], arr[0]];

        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, n, largest);
    }
}


// Heapsort recursive

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {

    }

    if (largest !== i) {

        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;
}

for (let i = n - 1; i > 0; 1--) {
    
    heapify(arr, i, 0);
    
}
