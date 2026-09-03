

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
    
    if(b === 0){
        return "Invalid function";
    }else{
    return a/b;
}
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

numbers.forEach(function(number){
    number.addEventListener("click",()=>{
        input.append(number.value);
    });
});
let justCalculated = false;
const operators = document.querySelectorAll(".operator");
operators.forEach(function(operator){
    operator.addEventListener("click",()=>{
       if(justCalculated){
            fnumber = parseFloat(input.textContent);
            selectedOperator = operator.value;
            Snumber = undefined;
            input.textContent="";
            justCalculated = false;
            return;
        }
        if(selectedOperator!==undefined){
        Snumber = parseFloat(input.textContent);
        const result = operate(fnumber,Snumber,selectedOperator);
        fnumber = result;
        input.textContent= "";
        }else{
        fnumber = parseFloat(input.textContent);
        }
        selectedOperator=operator.value;
        Snumber=undefined;
        input.textContent="";
    });
});

const equals = document.querySelector(".eoperator");
equals.addEventListener("click",()=>{
    
    Snumber=parseFloat(input.textContent);
    const result = operate(fnumber,Snumber,selectedOperator);
    input.textContent = result;
    fnumber = result;
    justCalculated = true;
});

const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    input.textContent="";//clears the screen
    fnumber = undefined;// this removes fnumber from memory
    Snumber = undefined;// this removes Snumber from memory
    selectedOperator = undefined;// this removes any operators used from memory
    justCalculated = false;
})





