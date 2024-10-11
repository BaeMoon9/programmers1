function solution(i, j, k) {
    var answer = 0;
    var arr1 = []
    var arr2 = []
    var regex = `${k}`
    var count = 0;
    
    for(let b=i; b<=j; b++){
        arr1.push(String(b))
    }
    for(let c=0; c<arr1.length; c++) {
        var num1 = arr1[c].split("")
        for(let d=0; d<num1.length; d++){
            arr2.push(num1[d])
        }
    }
    
    for(let e=0; e<arr2.length; e++){
        if(arr2[e].match(regex)) {
            count++;
        }
    }
    
    
    return count;
}