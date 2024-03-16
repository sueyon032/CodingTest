function solution(s) {
    var answer = true;
    if(s.length===4 || s.length===6) {
        answer= s.split("").every(a=> !isNaN(a));   // every는 boolean값을 리턴
    } else answer=false;
    return answer;
}