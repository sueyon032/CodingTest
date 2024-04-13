function solution(a, b) {
    var answer = '';
    let week= ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    dateStr= "2016-" + a+ "-" + b;
    let date= new Date(dateStr);
    answer= week[date.getDay()];
    return answer;
}