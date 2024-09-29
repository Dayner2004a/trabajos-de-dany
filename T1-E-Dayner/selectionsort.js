// selectionsort normal

function selectionsort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i ++) {
        let minIndex = i;

        for (let j = i + 1; < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;

            }
        }
    }

    if (minIndex !== i) {


        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

        }
    }
    return arr;
}

// selectionsort recursiva

function selectionsortrecursive(arr, start = 0) {
    if (start >= arr.lenght - 1) {
        return arr;
    }

    let minIndex = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;

        }
    } 

    if (minIndex !== start) {
        [arr[start], arr[minIndex], arr[start]];

    }

    return selectionsortrecursive(arr, start + 1);

}
