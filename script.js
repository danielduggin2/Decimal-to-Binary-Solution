const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000 
    }
]; //store data for each frame of the animation. inputVal: input each time recursive func runs, marginTop: top margin for DOM elements added to the page, addElDelay: delay between adding DOM elements to page

const decimalToBinary = (input) => {
    if(input === 0 || input === 1){
        return String(input)
    } 
    else{
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
}

// useful for asyn code 
const showAnimation = ()=> {
    setTimeout(() => {
        console.log("free");
    }, 500);
    setTimeout(() => {
        console.log("Code");
    }, 1000);
    setTimeout(() => {
        console.log("Camp");
    }, 1500);
}

const checkUserInput = () =>{
    const inputInt = parseInt(numberInput.value); //cuts down on continuous use of parseInt previously

    // console.log(numberInput.value);
    // parseInt converts a string into an integer or whole number. Takes at least one argument, a string to be converted into an integer, and returns either an intiger or NaN
    if(!numberInput || isNaN(inputInt)){
        alert("Please provide a decimal number");
        return;
    }

    // show animation when user tries to convert 5 to binary
    if(inputInt === 5){
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){ //Enter/Return keys have similar functions, so they both have the same string value of "Enter"
        checkUserInput();
    }
})