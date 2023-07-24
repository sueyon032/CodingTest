class Solution {
    public int solution(int[] numbers) {
        int answer = 45;    // 0~9를 모두 더한 숫자
        for(int n: numbers){
            answer-=n;  // 45에서 있는 숫자 모두 빼주면 없는 숫자만 남음
        }
        return answer;
    }
}