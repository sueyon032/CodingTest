function solution(array) {
    var answer = [];
    let max=0;
    let index=0;
    for(let i=0; i<array.length; i++) {
        if(max < array[i]) {
            max=array[i];
            index=i;
        }
        
    }
    
    answer.push(max);
    answer.push(index);
    return answer;
}