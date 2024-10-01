function solution(my_string) {
    var arr1 = [...my_string]
    var answer = [];
    for(i=0; i<=9; i++) {
        for(j=0; j<arr1.length; j++){
            var find1 = arr1.indexOf(String(i))
            if(find1 != -1 ) {
            arr1.splice(find1, 1)
            answer.push(i)
        }
        }
    }
    return answer
}