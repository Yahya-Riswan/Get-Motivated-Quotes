function arrayOfMultiples(num,n){
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(num * i)
    }
    return arr;
}
console.log(arrayOfMultiples(7, 5))