function solution(numbers, direction) {
    if(direction == "right") {
        var a = numbers.pop()
        numbers.unshift(a)
    }else if(direction == "left"){
        var b = numbers.shift()
        numbers.splice(numbers.length, 1, b)
        
    }
   return numbers
}