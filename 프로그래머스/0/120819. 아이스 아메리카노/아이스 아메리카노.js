function solution(money) {
    
    var coffee = Math.floor(money / 5500);
    var price = money - (coffee * 5500)
    var answer = [coffee, price]
    
    return answer;
}