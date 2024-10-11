function solution(i, j, k) {
    var answer = 0;
    var arr1 = []
    var arr2 = []
    var regex = `${k}`
    var count = 0;
    
    for(let b=i; b<=j; b++){
        //arr1에 문자로 저장 ["1", "2", ... "10", "11"]
        arr1.push(String(b))
    }
    for(let c=0; c<arr1.length; c++) {
        var num1 = arr1[c].split("")
        //num1 변수에다가 arr1[c]값을 split한다. ex) "123" ===> ["1", "2", "3"]
        for(let d=0; d<num1.length; d++){
            //num1 배열을 arr2에 순서대로 push한다
            //전부 한자리 숫자로 arr2에 들어간다.
            arr2.push(num1[d])
        }
    }
    
    for(let e=0; e<arr2.length; e++){
        if(arr2[e].match(regex)) {
            //match함수로 k가 등장할때마다 count를 1씩 올린다
            count++;
        }
    }
    
    
    return count;
}