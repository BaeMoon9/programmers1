function solution(n, t) {
    var answer = 0;
    answer = n * 2
    for (i=0; i<t -1; i++) {
        answer = answer * 2
    }
    
    return answer;
}