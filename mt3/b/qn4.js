function isPositiveDominant(arr){
    let pos = [];
    let neg = [];
    for(x of arr){
        if (x>=0 && !pos.includes(x)){
            pos.push(x)            
        }else if(x<0 && !neg.includes(x)){
            neg.push(x)
        }
    }
    if(pos.length > neg.length){
        return true;
    }else{
        return false;
    }
}
console.log(isPositiveDominant([5, 99, 832, -3, -4]))
