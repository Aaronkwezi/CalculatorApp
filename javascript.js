

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

let fnumber;
let selectedOperator;
let Snumber;
function operate(fnumber,Snumber,oper){

    if (oper==="+"){
        return add(fnumber,Snumber);
    }
    if(oper==="-"){
        return subtract(fnumber,Snumber);
    }
    if(oper==="x"){
        return multiply(fnumber,Snumber);
    }
    if(oper==="/"){
        return divide(fnumber,Snumber);
    }
}

const input = document.querySelector(".queries");
input.textContent="";
const numbers =  document.querySelectorAll(".btn");

numbers.forEach(function(button){
    button.addEventListener("click",()=>{
        input.append(button.value);
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach(function(button){
    button.addEventListener("click",()=>{
        fnumber = parseFloat(input.textContent);
        selectedOperator=button.value;
        input.textContent="";
        
    });
});

const equals = document.querySelector(".eoperator");
equals.addEventListener("click",()=>{
    Snumber=parseFloat(input.textContent);
    result = operate(fnumber,Snumber,selectedOperator);
    input.textContent=result;
})






