function solution(array) {
    var answer = 0;
    
    var sort1 = array.sort((a, b) => b - a)
    var mid = Math.floor((sort1.length -1 ) / 2)
    var answer = sort1[mid]
    
    return answer;
}