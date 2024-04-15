function solution(n) {
    var answer = 0;
    let num= n%7===0 ? n/7 : n/7+1
    answer= Math.floor(num)
    return answer;
}