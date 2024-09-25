function solution(array) {
    var answer = [];
    var maxVal = Math.max(...array)
    var indexVal = array.indexOf(maxVal)
    answer.push(maxVal)
    answer.push(indexVal)
    return answer;
}