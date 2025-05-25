// add, subtract multiply, divide
function add(x,y){
    return x+y
};

function subtract(x,y){
    return x-y
};

function multiply(x,y){
    return x*y
}

function divide(x,y){
    if (y==0){
        alert("Invalid divisor: 0. Use another divisor");
        return x;
    } else {
        return x/y;
    }
};

let mynum;
let operator;
let operand;

function operate(operator,mynum,operand){
    if (operator==add){
        return add(mynum,operand);
    }
    else if (operator==subtract){
        return subtract(mynum,operand);
    }
    else if (operator==multiply){
        return multiply(mynum,operand);
    }
    else if (operator==divide){
        return divide(mynum,operand);
    }
}

const calcDisplay=document.querySelector("#calcDisplay");
//const calcText=document.createElement("div");
//calcText.textContent="helllo";
//calcDisplay.appendChild(calcText);
let calcText=5;
calcDisplay.textContent=calcText;



