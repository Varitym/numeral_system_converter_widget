
function toDecimal(){
    let system = document.getElementById("inputSystem").value;
    let number = document.getElementById("inputData").value;
    let numString = "";
    numString = number;
    let numDecimal = parseInt(numString, system);
    
    if(check(system)==true){
    convert(numDecimal);
    }
    else{
        outputHTML = document.getElementById("output");
        outputHTML.innerHTML = "Type in valid input numeral system (2-16)!";
    }
}

function convert(numDecimal){
    let system = document.getElementById("outputSystem").value;
    let inputNumber = numDecimal;
    let numberArr = [];
    let output = "";

    if(system==16){
        toHex(numDecimal);
    }
    else if(check(system)==true){
        while(inputNumber>1){
            let numString = "";
            numberArr.push(Math.floor(inputNumber%system));
            numString+= inputNumber%system;
            inputNumber=inputNumber/system;
        }
        numberArr.reverse();
        output = numberArr.join("");
        outputHTML = document.getElementById("output");
        outputHTML.innerHTML = output;
    }
    else{
        outputHTML = document.getElementById("output");
        outputHTML.innerHTML = "Type in valid output numeral system (2-16)!";
    }

}
function toHex(numDecimal){

    hexString = (numDecimal.toString(16)).toUpperCase();
    output = document.getElementById("output");
    output.innerHTML = hexString;
}

function check(system){
    if(system >= 2 && system <= 16)
        return true;
    else
        return false;
}