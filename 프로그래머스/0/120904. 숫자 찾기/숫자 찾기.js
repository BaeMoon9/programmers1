function solution(num, k) {
    var answer = 0;
    var arr = String(num)

    if(arr.includes(k) == true) {
        return arr.indexOf(k) + 1
    }else {
        return arr.indexOf(k)
    }
    
}