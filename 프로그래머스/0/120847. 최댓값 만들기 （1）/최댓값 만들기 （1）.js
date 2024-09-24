function solution(numbers) {
    var a = Math.max(...numbers)
    var b = 0;
    var arr1 = numbers.filter(e => e == Math.max(...numbers))
    if(arr1.length > 1){
        b = a
    }else {
        var arr2 = numbers.filter(e => e < Math.max(...numbers))
        b = Math.max(...arr2)
    }
    return a * b;
}