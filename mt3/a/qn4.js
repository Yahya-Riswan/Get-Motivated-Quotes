function numInStr(arr){
    let nums = [1,2,3,4,5,6,7,8,9,0]
    let arrs = []
    for(let i = 0; i < arr.length; i++){
        let x = arr[i].split('')
        for(y of x){
            if(nums.includes(Number(y))){
                arrs.push(arr[i])
            }
        }
    }
    return arrs;
}
console.log(numInStr(["1a", "a", "2b", "b"]))