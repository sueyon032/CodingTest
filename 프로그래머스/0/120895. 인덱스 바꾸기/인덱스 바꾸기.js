function solution(my_string, num1, num2) {
    var answer = '';
    let arr= [...my_string];
    let save="";
        
    save= arr[num1];
    arr[num1]= arr[num2];
    arr[num2]=save;
    
    answer= arr.join('');
    
    return answer;
}