function solution(price) {
    var answer = 0;
    let sub=0
    if(price>=500000) sub=price*0.2
    else if(price>=300000) sub=price*0.1
    else if(price>=100000) sub=price * 0.05
    answer= price - Math.ceil(sub);
    return answer;
}