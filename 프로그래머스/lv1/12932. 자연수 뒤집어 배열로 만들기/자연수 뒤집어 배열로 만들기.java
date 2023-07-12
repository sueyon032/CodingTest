class Solution {
    public int[] solution(long n) {
        String s= ""+n; // 자동으로 n을 문자열로 만들어줌
        int[] answer = new int[s.length()];
        int cnt=0;
        while(n>0){
            answer[cnt]=(int)(n%10);    // 12345%10=5
            n/=10;  // 12345/10=1234
            cnt++;
        }
        return answer;
    }
}