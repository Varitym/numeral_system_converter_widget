
// function convert(){
//     const inputNumSystem = document.getElementById("inputSystem").value;
//     const outputNumSystem = document.getElementById("outputSystem").value;
//     const data = document.getElementById("inputData").value;
//     console.log(inputSystem);


// }

function decimalToTernary(liczba)
{

     let system = document.getElementById("outputSystem").value;
     let reszta = liczba % system;
     if(liczba > 1) decimalToTernary (liczba / system);
     console.log(reszta);
     return;
}

function convert(){
    let system = document.getElementById("inputSystem").value;
    let number = document.getElementById("inputData").value;
    // let docelowy = document.getElementById("outputSystem").value;
    let numString = "";
    numString = number;
    let numDecimal = parseInt(numString, system);
    toBinary(numDecimal);
}

function toBinary(numDecimal){
    let system = document.getElementById("outputSystem").value;
    let liczba = numDecimal;
    let numberArr = [];
    
    while(liczba>1){
        let numString = "";
        numberArr.push(Math.floor(liczba%2));
        numString+= liczba%2;
        liczba=liczba/2;
    }
    numberArr.reverse();
    console.log(numberArr);
}
