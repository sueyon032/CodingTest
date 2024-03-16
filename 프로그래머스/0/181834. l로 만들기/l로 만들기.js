function solution(myString) {
    var answer = '';
    answer=myString.replaceAll(/[a-k]/g, 'l');
    // answer=[...myString].map(a=>a.charCodeAt()<108 ? 'l' : a).join("");
    return answer;
}