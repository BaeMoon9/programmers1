function solution(num_list, n) {
    var answer = []
    var arr1 = []
    var count = num_list.length / n
    
    for(let i=1; i<=count; i++) {
        if(num_list.length >0) {
            let arr2 = num_list.splice(0,n)
            arr1.push(arr2)
        }
    }
    return arr1
}