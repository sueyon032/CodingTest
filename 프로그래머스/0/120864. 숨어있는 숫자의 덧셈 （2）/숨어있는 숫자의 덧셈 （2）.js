function solution(my_string) {
    var answer = 0;
    let str= my_string.split(/[a-zA-Z]/g);
    for(let i=0; i<str.length; i++) {
        if(str[i]==Number(str[i])) answer+=Number(str[i]);
    }
    return answer;
}