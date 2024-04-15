function solution(my_string) {
    var answer = '';
    my_string=[...my_string]
    answer=my_string.reverse().join("")
    return answer;
}