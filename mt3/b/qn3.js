function compress(str){
    let set = {}
    str.split('')
    for(x of str){
        if(set[x]){
             set[x] = set[x]+1
        }else{
            set[x] = 1
        }
    }
    return set;
}

console.log(compress("abc"))