const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    while(input > 0){
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }

     console.log("Inputs: ", inputs);
     console.log("Quotients: ", quotients);
     console.log("Remainders: ", remainders);
     result.innerText = remainders.reverse().join("");
}

const checkUserInput = () =>{
    // console.log(numberInput.value);
    // parseInt converts a string into an integer or whole number. Takes at least one argument, a string to be converted into an integer, and returns either an intiger or NaN
    if(!numberInput || isNaN(parseInt(numberInput.value))){
        alert("Please provide a decimal number");
        return;
    }

    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){ //Enter/Return keys have similar functions, so they both have the same string value of "Enter"
        checkUserInput();
    }
})