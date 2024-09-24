function solution(array, height) {
    var answer = 0;
    
    var num = array.filter((a) => {
        return a > height
    })
    answer = num.length
    return answer;
}