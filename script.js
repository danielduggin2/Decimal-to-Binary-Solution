const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
        msg: "decimalToBinary(5) returns '10' + 1 (5 % 2). Then it pops off the stack.",
        showMsgDelay: 15000,
        removeElDelay: 20000
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
        msg: "decimalToBinary(2) returns '1' + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 10000,
        removeElDelay: 15000
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 5000,
        removeElDelay: 10000
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
const showAnimation = () => {
    result.innerText = "Call Stack Animation";
    animationData.forEach((obj) => {
        setTimeout(() => { 
            animationContainer.innerHTML +=
                `<p id="${obj.inputVal}" 
                    style="margin-top: ${obj.marginTop}px"
                    class="animation-frame">
                    decimalToBinary(${obj.inputVal})
                </p>`;
        }, obj.addElDelay);

        setTimeout(() => { 
            document.getElementById(obj.inputVal).textContent = obj.msg; //select the element with the id attribute with the value of inputVal property of the current object
        }, obj.showMsgDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    setTimeout(() => { 
        result.textContent = decimalToBinary(5);
    }, 20000);

    // setTimeout(() => {
    //     console.log("free");
    // }, 500);
    // setTimeout(() => {
    //     console.log("Code");
    // }, 1000);
    // setTimeout(() => {
    //     console.log("Camp");
    // }, 1500);
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