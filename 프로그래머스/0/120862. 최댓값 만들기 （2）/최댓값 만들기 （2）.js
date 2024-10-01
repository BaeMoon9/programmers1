function solution(numbers) {
    var arr = [];
    var answer = 0;
    for(i=0; i<numbers.length; i++) {
        for(j=0; j<numbers.length; j++){
            if(i != j) {
                arr.push(numbers[i] * numbers[j])
            }
        }
    }
    return Math.max.apply(null,arr)
}