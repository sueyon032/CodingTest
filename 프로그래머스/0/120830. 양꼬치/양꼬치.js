function solution(n, k) {
    var answer = 0;
    let service= k - (Math.floor(n/10))
    answer= (n * 12000) + (service * 2000)
    return answer;
}