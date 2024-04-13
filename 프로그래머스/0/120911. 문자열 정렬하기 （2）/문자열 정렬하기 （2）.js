function solution(my_string) {
    var answer = '';
    let lower= my_string.toLowerCase();
    let str=[...lower];
    answer= str.sort().join('');
    return answer;
}