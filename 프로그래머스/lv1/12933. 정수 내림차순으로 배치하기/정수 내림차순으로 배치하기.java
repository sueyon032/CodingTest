import java.util.*;
class Solution {
    public long solution(long n) {
        long answer = 0;
        String str= Long.toString(n);   // Long형인 n을 String으로 만들기
        String strArr[]= str.split(""); // str을 ""를 기준으로 배열로 만들기
        
        Arrays.sort(strArr, Collections.reverseOrder());    // 내림차순하기
        str= String.join("",strArr);    // ""를 기준으로 String으로 만들기
        answer=Long.parseLong(str);
        
        return answer;
    }
}