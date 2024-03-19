function solution(s){
    var answer = true;
    s = s.toUpperCase();
    let pn=0, yn=0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i]==="P") pn++;
        else if (s[i]==="Y") yn++;
        else continue;
    }
    
    if(pn!=yn) answer=false;

    return answer;
}