const leftNumber = +prompt("Enter number 1: ")
const operator = prompt("Enter operator : ")
const rightNumber = +prompt("Enter number 2: ")

if(isNaN(leftNumber)|| isNaN(rightNumber)){
    console.log("Not a number")
}

if(operator === "+"){
    console.log(leftNumber + rightNumber)
}
if(operator === "-"){
    console.log(leftNumber - rightNumber)
}
if(operator === "*"){
    console.log(leftNumber * rightNumber)
}
if(operator === "/"){
    console.log(leftNumber / rightNumber)
}
