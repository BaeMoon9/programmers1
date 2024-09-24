function solution(array, n) {
    var filter1 = array.filter((value) => {
       return value == n
    })
    
    var answer = filter1.length
    
    
    return answer;
}