function solution(my_string) {
    var answer = [];
    var arr = []
    for(i=0; i<my_string.length; i++){
        arr.push(my_string[i].toLowerCase())
    }
    answer = arr.sort();
    return answer.join("");
}