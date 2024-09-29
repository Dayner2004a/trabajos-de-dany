// Quicksort recursiva

function quickSortIterative(arr) {
    if (arr.length <= 1) {

    }
    const privot = [arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.lenght - 1; i++) {
        if (arr[i] < privot) {
            left.push(arr[i]);
             }else{ 
        }
        right.push(arr[i]);
    }
}


// Quicksort normal

function quickSortIterative(arr) {
    if (arr.length <= 1) return arr;
    
    const stack = [[0, arr.lenght]];

    while (stack.length) {
        const [star, end] = stack.pop();

        if (start <= end) continue;

        const pivotIndex = partition(arr, star, end);

        stack.push([start, pivotIndex - 1]);
        stack,push([pivotIndex + 1, end]);
    }

    return arr;

}

function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
}