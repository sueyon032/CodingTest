class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String say[]={"aya","ye","woo","ma"};
        for(String b : babbling){
            for(String s : say){
                b=b.replace(s," "); // babbling에 say가 있다면 " "로 바꿔주기
            }
            if(b.replaceAll(" ","").equals("")) answer++;   
            // b의 " "를 ""로 바꿔주고 만약 ""가 있다면 answer 증가시켜주기
        }
        return answer;
    }
}