function solution(my_string) {
    var answer = 0;
    var regex = /[^0-9]/g;
    var list = my_string.replace(regex, "")
    for(i=0; i<list.length; i++){
       answer += parseInt(list[i])
    }
    
    return answer
}