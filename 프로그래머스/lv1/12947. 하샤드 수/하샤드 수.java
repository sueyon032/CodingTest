class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        String strArr[]= Integer.toString(x).split("");
        
        int sumStr=0;
        for(String n: strArr){
            sumStr+=Integer.parseInt(n);
        }
        
        if(x%sumStr!=0) answer=false; 
        
        return answer;
    }
}