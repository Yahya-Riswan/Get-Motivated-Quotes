function doubleLetters(str){
    let ans = []
    str.split('');
    for(x of str){
        if(ans.includes(x)){
            return true;
        }else{
            ans.push(x)
        }
    }
    return false
}

console.log(doubleLetters("loop"))