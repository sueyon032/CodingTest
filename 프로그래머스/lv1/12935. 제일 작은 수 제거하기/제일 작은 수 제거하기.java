class Solution {
    public int[] solution(int[] arr) {
        if(arr.length==1) {
            int[] answer={-1};
            return answer;  // 여기서 종료
        }
        
        int[] answer = new int[arr.length-1];  // 가장작은수뺀길이
        int min=arr[0];
        for(int i=0; i<arr.length; i++){
            min=Math.min(min,arr[i]);
        }
        int cnt=0;
        for(int i=0; i<arr.length; i++){
            if(min==arr[i]) continue;
            else answer[cnt++]=arr[i];
        }
        return answer;
    }
}