function solution(n) {
    var answer = [];
    let arr= []
    for(let i=1; i<=n; i++) {
        arr.push(i)
    }
   
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2!==0) answer.push(arr[i])
    }
    return answer;
}