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

let myNum;
let operator;
let operand;

function operate(){
    operand=Number(calcDisplay.textContent);
    if (operator==add){
        myNum=add(myNum,operand);
    }
    else if (operator==subtract){
        myNum=subtract(myNum,operand);
    }
    else if (operator==multiply){
        myNum=multiply(myNum,operand);
    }
    else if (operator==divide){
        myNum=divide(myNum,operand);
    }
    calcDisplay.textContent=`${myNum}`
    operator=undefined;
    operand=undefined;
    myNum=undefined;
}

const calcDisplay=document.querySelector("#calcText");
calcDisplay.textContent="";

function pressNum(num){
    calcDisplay.textContent+=`${num}`;
}

function clearDisplay(){
    calcDisplay.textContent="";
}
function pickOperator(choice) {
    myNum=Number(calcDisplay.textContent);
    clearDisplay();
    operator=choice;
}





