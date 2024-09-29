function solution(num_list) {
    var a = 0;
    var b = 0;
    var answer = []
    for(i=0; i<num_list.length; i++){
        if(num_list[i] % 2 == 0) {
            a++;
        }else {
            b++
        }
    }
    answer.push(a)
    answer.push(b)
    return answer;
}