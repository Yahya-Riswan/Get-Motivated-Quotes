function countLetters(str){
    let vowels = ['a','e','i','o','u'];
    let ans = {vowels:0,consonants: 0}

    let srr =  str.split('')
    for(x of str){
        if(vowels.includes(x)){
            ans.vowels += 1
        }else if(x == ' '){

        }else{
            ans.consonants += 1
        }
    }
    return ans;

}

console.log(countLetters("Hello World"))