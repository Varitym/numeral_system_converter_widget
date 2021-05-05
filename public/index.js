
function toDecimal(){
    let system = document.getElementById("inputSystem").value;
    let number = document.getElementById("inputData").value;
    let numString = "";
    numString = number;
    let numDecimal = parseInt(numString, system);

    convert(numDecimal);
}

function convert(numDecimal){
    let system = document.getElementById("outputSystem").value;
    let liczba = numDecimal;
    let numberArr = [];
    let output = "";

    if(system==16){
        toHex(numDecimal);
    }
    else{
        while(liczba>1){
            let numString = "";
            numberArr.push(Math.floor(liczba%system));
            numString+= liczba%system;
            liczba=liczba/system;
        }
        numberArr.reverse();
        output = numberArr.join("");
        outputHTML = document.getElementById("output");
        outputHTML.innerHTML = output;
    }
}
function toHex(numDecimal){
    hexString = (numDecimal.toString(16)).toUpperCase();
    console.log(hexString);
    output = document.getElementById("output");
    output.innerHTML = hexString;
}
