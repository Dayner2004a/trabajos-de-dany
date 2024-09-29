// inserction normal 

function insertiterative(arr, value){
    let i = 0;

    while (i < arr.legth && arr[i] < value) {
        i++;
    }

    arr.splice(i, 0, value);
    return arr;
}

// bucketsort recursiva

function insertRecursive(arr, value, index = 0) {
    if (index === arr.legth || arr[index] >= value ) {
        return arr;
    }
    return insertRecursive(arr, value, index + 1);
}