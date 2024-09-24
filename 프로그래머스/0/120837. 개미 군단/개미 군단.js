function solution(hp) {
    var answer = 0;
   
    var ant5 = Math.floor(hp / 5);
    var r5 = hp % 5; 
    
    var ant3 = Math.floor(r5 / 3);
    var r3 = r5 % 3;
    
    var ant1 = Math.floor(r3 / 1);
    answer = ant5 + ant3 + ant1
    
    
    return answer;
}