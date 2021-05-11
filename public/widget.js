
window.onload = initialise();
const errorOutput = document.getElementById("errorOutput");
const widget = document.getElementById("widget");
const widgetOpenBtn = document.getElementById("widgetOpen");
const calcBackground = document.getElementById('calcBackground');
const outputHTML = document.getElementById("output");

function initialise(){
    const html = `<div class= "h-screen flex justify-center items-center" id="calcBackground">
                    <div class="h-screen w-screen p-2 2xl:w-1/3 2xl:h-3/4">
                        <div class="bg-white h-full hidden border border-gray-600 rounded-md flex flex-col justify-between" id="widget">
                            <div>
                                <div onclick="widgetClose()" class="flex justify-end">
                                    <svg class="w-6 h-6 mr-2 mt-2 cursor-pointer" width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="130" cy="130" r="125" fill="white" stroke="black" stroke-width="10"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.0711 63L63 70.0711L123.104 130.175L63 190.279L70.0711 197.35L130.175 137.246L190.279 197.35L197.35 190.279L137.246 130.175L197.35 70.0711L190.279 63.0001L130.175 123.104L70.0711 63Z" fill="black"/>
                                    </svg>
                                </div>
                                <form class="flex flex-col items-center mt-10" id="calcForm">
                                    <label class="mb-1">Input numeral system (2-16)</label>
                                    <input class="bg-gray-100 w-3/4 p-3 rounded-md shadow mb-3" type="number" id="inputSystem"/>
                                    <label class="mb-1">Output numeral system (2-16)</label>
                                    <input class="bg-gray-100 w-3/4 p-3 rounded-md shadow mb-3" type="number" id="outputSystem"/>
                                    <label class="mb-1">Input data</label>
                                    <input class="bg-gray-100 w-3/4 p-3 rounded-md shadow mb-3" type="text" id="inputData"/>
                                </form>
                                <div class="mb-1 text-center">Output data</div>
                                <div class="bg-gray-100 w-3/4 h-12 mx-auto p-3 shadow rounded-md mb-3" id="output"></div>
                                <div class="text-red-600 p-4 w-3/4 mx-auto mt-10 bg-gray-100 rounded-md shadow border border-gray-400 hidden" id="errorOutput"></div>
                            </div>
                            <div class="w-3/4 mx-auto flex justify-between mb-10 2xl:mt-10">
                                <button class="bg-red-800 text-white font-semibold px-8 py-3 rounded-lg" id="clearBtn" onclick="resetForm()">Clear</button>
                                <button class="bg-green-600 px-8 py-3 text-white rounded-lg font-semibold" onclick="toDecimal()">Submit</button>
                            </div>  
                        </div>
                        <div class="w-50 bg-gray-900 rounded-xl text-white text-center px-5 absolute right-10 bottom-10" id="widgetOpen" onclick="widgetOpen()">
                            <svg class="w-10 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.859 477.859" fill="#FFFFFF"><path d="M472.863 175.662L353.396 56.195c-6.666-6.664-17.472-6.662-24.136.004a17.066 17.066 0 00-4.997 12.063v51.2H204.796c-9.426 0-17.067 7.641-17.067 17.067s7.641 17.067 17.067 17.067H341.33c9.426 0 17.067-7.641 17.067-17.067V109.46l78.268 78.268-78.268 78.268v-27.068c0-9.426-7.641-17.067-17.067-17.067H153.596v-51.2c-.002-9.426-7.645-17.065-17.07-17.063a17.068 17.068 0 00-12.063 4.997L4.997 278.062c-6.663 6.665-6.663 17.468 0 24.132l119.467 119.467c3.2 3.201 7.54 5 12.066 5.001a16.852 16.852 0 006.536-1.297 17.066 17.066 0 0010.53-15.77v-51.2h119.467c9.426 0 17.067-7.641 17.067-17.067s-7.641-17.067-17.067-17.067H136.53c-9.426 0-17.067 7.641-17.067 17.067v27.068l-78.268-78.268 78.268-78.268v27.068c0 9.426 7.641 17.067 17.067 17.067h187.733v51.2c.002 9.426 7.645 17.065 17.07 17.063a17.068 17.068 0 0012.063-4.997l119.467-119.467c6.662-6.665 6.662-17.468 0-24.132z"/></svg>
                        </div>
                    </div>
                </div>`
    document.body.innerHTML = html;
}




function toDecimal(){
    const system = document.getElementById("inputSystem").value;
    const number = document.getElementById("inputData").value;
    let numString = "";
    numString = number;
    const numDecimal = parseInt(numString, system);
    
    if(check(system)==true){
    convert(numDecimal);
    }
    else{
        errorOutput.classList.remove("hidden");
        errorOutput.innerHTML = "Type in valid input numeral system (2-16)!";

    }
}

function convert(numDecimal){
    const system = document.getElementById("outputSystem").value;
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
        outputHTML.innerHTML = output;
        errorOutput.classList.add('hidden');
    }
    else{
        errorOutput.classList.remove("hidden");
        errorOutput.innerHTML = "Type in valid input numeral system (2-16)!";
    }

}
function toHex(numDecimal){

    hexString = (numDecimal.toString(16)).toUpperCase();
    outputHTML.innerHTML = hexString;
    errorOutput.classList.add('hidden');
}

function check(system){
    if(system >= 2 && system <= 16)
        return true;
    else
        return false;
}
function widgetClose(){
    calcBackground.classList.remove("bg-gray-500");
    widget.classList.add("hidden");
    widgetOpenBtn.classList.remove("hidden");

}
function widgetOpen(){
    calcBackground.classList.add("bg-gray-500");
    widget.classList.remove("hidden");
    widgetOpenBtn.classList.add("hidden");


}

function resetForm(){
    document.getElementById("calcForm").reset();
    document.getElementById("output").innerHTML = "";
    errorOutput.classList.add("hidden");
}




