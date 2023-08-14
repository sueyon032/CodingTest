class Solution {
    public int[] solution(int n, int m) {
        int max=Math.max(n,m);
        int min=Math.min(n,m);
        
        // 최대공약수
        while(min!=0){
            int x= max%min;
            max=min;
            min=x;
        }
        
        // 최소 공배수= 두수의곱/최대공약수
        int a= n*m / max;
        
        int[] answer = {max, a};
        return answer;
    }
}