function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++) {
        let num=0;
        for(let j=1; j<=i; j++) {
            if(i%j==0) num++; 
            else continue;
        }
        if(num%2==0) answer+=i;
        else answer-=i;
    }
    return answer;
}