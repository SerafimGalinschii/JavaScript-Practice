// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

function detect(w, word) {
    const wordt = word.slice(2, 4);
    for (let i = 0; i < wordt.length; i++) {
        if (wordt[i] === w) {
            console.log(w);
            return true;
        }
    }
    return false;
}

console.log(detect('z', 'dezastru')); // Output: true (and 'z' is logged)
console.log(detect('z', 'albastru')); // Output: false
