function solution(my_string) {
   var answer = []
    for(i=1; i<=my_string.length; i++) {
        answer.push(my_string[my_string.length - i])
    }
   return answer.join('')
}