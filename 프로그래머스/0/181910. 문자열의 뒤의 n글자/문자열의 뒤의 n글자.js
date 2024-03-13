function solution(my_string, n) {
    var answer = '';
    
    let arr= my_string.split("").join("");
    let start= arr.length-n;
    
    answer+=arr.slice(start);
    
    return answer;
}