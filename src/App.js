function add (a ,b){
    let sum = a + b
    return sum
}
function sub (a ,b){
    let sum = a - b
    return sum
}
function mul (a ,b){
    let sum = a * b
    return sum
}
function div (a ,b){
    let sum = a / b
     sum.toFixed(2)
    return sum
}

export default add;
export {sub , mul ,  div}