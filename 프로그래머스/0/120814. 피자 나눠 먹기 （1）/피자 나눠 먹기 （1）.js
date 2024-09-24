function solution(n) {
    var answer = 0;
    var piece = n % 7;
    var pizza = Math.floor(n / 7);
    var res = 0;
    if(piece === 0) {
        return pizza
    }else if (piece !== 0){
        return pizza + 1
    }
        
    
    
}