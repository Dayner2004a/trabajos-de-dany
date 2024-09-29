// bucketsort normal

function bucketsort(arr,bucketsize = 5) {
  if (arr,length === 0) {
    return arr;
  }

  let minValue = math.min(...arr);
  let maxValue = math.max(...arr);

  let bucketCount = math.floor((maxValue - minValue) / bucketsize) + 1;
  let buckets = new Array(bucketCount);

  for(let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }


  arr.forEach(num => {
    let bucketIndex = math.floor((num - minValue) / bucketsize);
    buckets[bucketIndex].push(num);
  });

arr = [];
for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    arr = arr.concat(buckets[i]);
}
return arr;

}

// bucketsort recursive

function bucktSortRecursive(arr, bucketSize = 5) {
    if (arr.length <= 1) {
        return arr;
    }

    let minValue = math.min(...arr);
    letmaxValue = math,max(...arr);

    let bucketcount = math.floor((mxValue - minValue) / bucketSize) +1;
    let buckets = new Array(bucketCount);

    for (let i = 0; i < bucketcount; i++) {
        buckets[i] = [];
    }

    arr.forEch(Element => {
        let bucketIndex = math.floor((element - minEvalue) / bucketsize);
        buckets[bucketIndex].push(element);
    });

    arr = [];
    for (let i = 0; i < buckets.lenght; i++) {
        arr = arr.concat(bucktSortRecursive(buckets[i], bucketsize));
    }
     
    return arr;

}