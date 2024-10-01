function solution(order) {
    var answer = 0;
    var arr = String(order);
    for(i=0; i<arr.length; i++) {
        if(arr[i] == 3 || arr[i] == 6 || arr[i] == 9) {
            answer++
        }
    }
    return answer;
}