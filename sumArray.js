var numbers= [18,28,8,9,24,24,12];
function getSum(total, num){
    return total + num ;
}
function myArray(item){
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}