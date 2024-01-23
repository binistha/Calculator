const display = document.getElementById("display");

function appendToDisplay(input){
   display.value += input;
}

function clearDisplay(){
display.value = "";
}

function deleteNum(){
    let currentValue = display.value;

    if (currentValue.length >= 0){
        currentValue = currentValue.slice(0, -1);

        display.value = currentValue;
    }
}

function calculate(){
    try{
 display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

