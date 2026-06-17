let num1=prompt("Enter first number ")
let opr=prompt("Enter arthimatic operator ie +, -, *, /")
let num2=prompt("Enter second number ")

num1=Number(num1)
num2=Number(num2)

switch(opr){
    case '+':
        console.log("Addition is ",num1+num2);
        break
    case '-':
        console.log("Addition is ",num1-num2);
        break
    case '*':
        console.log("Addition is ",num1*num2);
        break
    case '/':
        console.log("Addition is ",num1/num2);
        break
    case '%':
        console.log("Addition is ",num1%num2);
        break
    default:
        console.log("Invlaid operator");
}