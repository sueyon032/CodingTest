function solution(numbers, direction) {
    var answer = [];
    if(direction==="right") {
        let num= numbers.pop();
        numbers.unshift(num);
    } else {
        let num= numbers.shift();
        numbers.push(num);
    }
    return numbers;
}