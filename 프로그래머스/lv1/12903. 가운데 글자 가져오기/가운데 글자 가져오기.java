class Solution {
    public String solution(String s) {
        String answer = "";
        if(s.length()%2==0){
            answer+=s.charAt(s.length()/2-1);   // charAt은 0부터 시작
            answer+=s.charAt(s.length()/2); 
            
        } else {
            answer+=s.charAt(s.length()/2);
        }
        return answer;
    }
}