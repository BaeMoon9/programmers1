function solution(n) {
    var answer = [];
    
    var arr1 = []
    for(i = 0; i <= n; i++) {
       arr1.push(i)
    }
    
    answer = arr1.filter((a) =>{
        return a % 2 !== 0
    })
    
    
    
    
    
    return answer;
}