function solution(numbers) {
    var list = numbers;
    var sum = 0;
   
    
    for(i=0; i < list.length; i++) {
        sum += list[i]
    }
    
     var avg = sum / list.length
    
    return avg;
}