function solution(number) {
    var answer = 0;
    let num= [...number];
    let sum=0;    
    for(let i=0; i<num.length; i++) {
        sum+=Number(num[i]);   
    }
    answer=sum%9;
    return answer;
}