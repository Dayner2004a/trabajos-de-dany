// Mergesort normal

function Mergesort(arr) {
    if (arr.legngth <= 1) {
        return arr;
    }

    const middle = math.floor(arr.lenght / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(Mergesort(left), Mergesort(right));

}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.lenght) {
        if (left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
         }else{ 
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}


// Mergesort recursiva

function mergesortIterative(arr) {
    if(arr.legth <= 1) return arr; 

    let work = array.from(arr);

    for (let width = 1; width < arr.length; width *= 2) {
        for (let i = 0; i < arr.legth; i += 2 * width) {
            let left = i;
            let middle = math.min(i + width, arr.legth);
            let rigth = math.min(i + 2 * width, arr.length);

            mergesortIterative(work, arr, left, middle, right);
        }

        [arr, work] = [work, arr];
    }
    return arr;
}

function mergeIterative(source, target, left, middle, right) {
     let i = left, j = middle;

     for (let k = left; k < right; k++) {
        if (i < middle && (j >= rigth || source[i] <= source[j])) {
            targe[k] = source[i++];
             }else{
                target[k] = source[j++];
                 
        }
     }
}