class Solution {
    public String solution(String phone_number) {
        String answer = "";
        String[] strNum= phone_number.split("");
        int len= strNum.length;
        
        for(int i=0; i<len; i++){
            if(i<len-4) answer+="*";
            else answer+=strNum[i];
        }
        
        return answer;
    }
}