function solution(age) {
    var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    var age1 = String(age)
    var arr2 = [...age1]
    var answer = []
    for(i=0; i<arr2.length; i++) {
        let a = Number(arr2[i])
        answer.push(arr[a])
    }
    return answer.join('')
}