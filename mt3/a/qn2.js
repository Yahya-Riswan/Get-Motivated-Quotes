function isIsogram(str){
    str.split('');
    let arr = [];
    for(x of str){
        if(!arr.includes(x)){
            arr.push(x)
        }else{
            return false;
        }
    }
    return true;
}

console.log(isIsogram("Algorism"))