// operation functions
function add(num1, num2)
{
  return num1 + num2;
}
function sub(num1, num2)
{
  return num1 - num2;
}
function mult(num1, num2)
{
  return num1 * num2;
}
function div(num1, num2)
{
  if(num2 == 0)
  {
      textDisplay.style.cssText = "font-size: 200%; padding-top: 10%;";
      textDisplay.textContent = "ERROR: DIV BY 0";
      return undefined;
  }

  return num1 / num2;
}
function operate(op, num1, num2)
{
  let result;
  switch(op)
  {
    case '+':
    {
        result = add(num1, num2);
        break;
    }
    case '-':
    {
      result = sub(num1, num2);
      break;
    }
    case '*':
    {
      result = mult(num1, num2);
      break;
    }
    case '/':
    {
      result = div(num1, num2);
      break;
    }
  }
  return result;
}

// Disable/enable decimal keys
function disableDecimal(){
  buttonArr[13].disabled = true;
  buttonArr[13].style.cssText = "cursor: not-allowed;";
}
function enableDecimal() {
  buttonArr[13].disabled = false;
  buttonArr[13].style.cssText = "cursor: pointer;";
}

// Button functions
function button7() {
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("7");
};
function button8() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("8");
};
function button9() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("9");
};
function buttonDiv() {
  enableDecimal();
  if(num1 != undefined)
  {
    equals();
  }
  else {
    num1 = Number(textDisplay.textContent, 10);
  }
  operation = "/";
  opChosen = true;
};
function button4() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("4");
};
function button5() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("5");
};
function button6() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("6");
};
function buttonMult() {
  enableDecimal();
  if(num1 != undefined)
  {
    equals();
  }
  else {
    num1 = Number(textDisplay.textContent, 10);
  }

  operation = "*";
  opChosen = true;
};
function button1() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("1");
};
function button2() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("2");
};
function button3() {
  if(textDisplay.textContent == "0")
  {
    textDisplay.textContent = "";
  }
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("3");
};
function buttonSub() {
  enableDecimal();
  if(num1 != undefined)
  {
    equals();
  }
  else {
    num1 = Number(textDisplay.textContent, 10);
  }

  operation = "-";
  opChosen = true;
};
function button0() {
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  if(textDisplay.textContent == "0")
  {
    return;
  }
  textDisplay.textContent = textDisplay.textContent.concat("0");
};
function buttonDeci() {
  if(opChosen || result == undefined)
  {
    textDisplay.textContent = "";
    opChosen = false;
    result = 0;
    textDisplay.style.cssText = "font-size: 300%; padding-top: 5%;";
  }
  if(textDisplay.textContent.length >= 13)
  {
    return;
  }
  if(textDisplay.textContent.indexOf(".") != -1)
  {
    return;
  }
  if(textDisplay.textContent.length == 0)
  {
    textDisplay.textContent = "0";
  }
  textDisplay.textContent = textDisplay.textContent.concat(".");
  disableDecimal();
};
function buttonBack() {
  textDisplay.textContent = textDisplay.textContent.slice(0, textDisplay.textContent.length-1);
  if(textDisplay.textContent.indexOf(".") == -1)
  {
    enableDecimal();
  }
};
function buttonAdd() {
  enableDecimal();
  if(num1 != undefined)
  {
    equals();
  }
  else {
    num1 = Number(textDisplay.textContent, 10);
  }

  operation = "+";
  opChosen = true;
};
function buttonClear() {
  textDisplay.textContent = "0";
  opChosen = false;
  operation = "";
  num1 = undefined;
  num2 = undefined;
  enableDecimal();
};
function buttonEnter()
{
  equals(1);
};

const buttonContainer = document.querySelector('.buttons');

const buttonArr = [];
let operation = "";
let opChosen = false;
let num1 = undefined, num2 = undefined;
let result = 0;

let numDisplay = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
let count = 0;
for(let x = 0; x < 18; x++)
{
  buttonArr[x] = document.createElement("button");
  buttonArr[x].classList.add('btn');
  buttonContainer.appendChild(buttonArr[x]);

  if((x+1) % 4 == 0 || count == 10)
  {
    if((x+1) % 4 == 0)
    {
        buttonArr[x].classList.add('operationBtn');
    }
    continue;
  }
  buttonArr[x].textContent = numDisplay[count];
  count++;
}
function equals() {
  enableDecimal();
  // Enter here
  if(num1 == undefined && num2 == undefined)
  {
    return;
  }

  num2 = Number(textDisplay.textContent, 10);
  opChosen = false;

  if(operation == "")
  {
    return;
  }

  result = operate(operation, num1, num2);

  if(result != undefined)
  {

    resultStr = result.toString();

    if(resultStr.length > 13)
    {
      result = result.toPrecision(12);
      resultStr = parseFloat(result).toString();
    }
    textDisplay.textContent = resultStr;
    operation = "";
    num1 = result;
    num2 = undefined;
  }

  if(arguments.length == 1)
  {
    num1 = undefined;
    num2 = undefined;
  }
}

buttonArr[3].textContent = "÷";
buttonArr[7].textContent= "x";
buttonArr[11].textContent= "-";
buttonArr[12].textContent= "0";
buttonArr[13].textContent= ".";
buttonArr[14].textContent= "▶";
buttonArr[14].classList.add('backspaceBtn');
buttonArr[15].textContent= "+";
buttonArr[16].textContent = "CLEAR";
buttonArr[16].style.cssText = 'grid-area: clr;'
buttonArr[16].classList.add('backspaceBtn');
buttonArr[17].textContent = "=";
buttonArr[17].style.cssText = 'grid-area: ent; background: limegreen;'

// Functionality for buttons
buttonArr[0].addEventListener('click', button7);
buttonArr[1].addEventListener('click', button8);
buttonArr[2].addEventListener('click', button9);
buttonArr[3].addEventListener('click', buttonDiv);
buttonArr[4].addEventListener('click', button4);
buttonArr[5].addEventListener('click', button5);
buttonArr[6].addEventListener('click', button6);
buttonArr[7].addEventListener('click', buttonMult);
buttonArr[8].addEventListener('click', button1);
buttonArr[9].addEventListener('click', button2);
buttonArr[10].addEventListener('click', button3);
buttonArr[11].addEventListener('click', buttonSub);
buttonArr[12].addEventListener('click', button0);
buttonArr[13].addEventListener('click', buttonDeci);
buttonArr[14].addEventListener('click', buttonBack);
buttonArr[15].addEventListener('click', buttonAdd);
buttonArr[16].addEventListener('click', buttonClear);
buttonArr[17].addEventListener('click', buttonEnter);

// Keyboard Functionality
const page = document.querySelector("body");
page.addEventListener('keydown', function() {
  if(event.keyCode == 55)
  {
    button7();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 56)
  {
    button8();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 57)
  {
    button9();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 191)
  {
    buttonDiv();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 52)
  {
    button4();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 53)
  {
    button5();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 54)
  {
    button6();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 88)
  {
    buttonMult();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 49)
  {
    button1();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 50)
  {
    button2();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 51)
  {
    button3();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 189)
  {
    buttonSub();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 48)
  {
    button0();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 190)
  {
    buttonDeci();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 8)
  {
    buttonBack();
  }
});
page.addEventListener('keydown', function() {
  if(event.shiftKey && event.keyCode == 187)
  {
    buttonAdd();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 46)
  {
    buttonClear();
  }
});
page.addEventListener('keydown', function() {
  if(event.keyCode == 13)
  {
    buttonEnter();
  }
});

// Text display stuff
const calcDisplay = document.querySelector('.display');
const textDisplay = document.createElement("p");
textDisplay.textContent = "0";
if(textDisplay.textContent.length > 13)
{
  textDisplay.textContent = textDisplay.textContent.slice(0, 13);
}
calcDisplay.appendChild(textDisplay);
