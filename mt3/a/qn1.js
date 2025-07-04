function  invertArray(arr){
    for(let i=0; i < arr.length;i++){
        arr[i] = arr[i] * -1
    }
    return arr;
}

console.log(invertArray([1, 2, 3, 4, 5]))