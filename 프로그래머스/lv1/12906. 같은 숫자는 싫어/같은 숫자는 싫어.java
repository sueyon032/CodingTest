import java.util.*;

public class Solution {
    public List<Integer> solution(int []arr) {
        List<Integer> answer = new ArrayList<>();
        
        int temp=-1;
        for(int n : arr){
            if(n!=temp) answer.add(n);
            temp=n;
        }
        
        return answer;
    }
}