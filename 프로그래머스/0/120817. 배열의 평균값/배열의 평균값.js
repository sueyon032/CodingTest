function solution(numbers) {
    var answer = 0;
    let sum=0;
    for(let i of numbers) sum+=i;
    answer=sum/numbers.length;
    return answer;
}