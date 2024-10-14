const past = (h,m,s) => {
    var milisec = 1000;
    var sec = s * milisec;
    var min = m * 60 * milisec;
    var hour = min * 60 * 60 * milisec;
    
    return hour + min + sec;
}
console.log(past(0, 0, 0)); 
console.log(past(0, 1, 1)); 
console.log(past(1, 0, 0)); 
console.log(past(1, 0, 1)); 
console.log(past(1, 1, 1));