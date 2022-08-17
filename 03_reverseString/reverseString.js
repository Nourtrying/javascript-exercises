const reverseString = function(string) {
    let reversed = "";
    let length = string.length - 1;
    while(length >= 0){
        reversed += string[length];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
