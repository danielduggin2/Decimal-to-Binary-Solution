// recursion example
// func to count down from a given number to zero using recursion
const countDownAndUp = (number)=> {
    console.log(number);
    // recursive function: one that calls itself over and over. Since this func will countdown from a given number to 0, the base case is when number parameter is equal to zero
    // when writing the case, remember: 1. What is the base case? 2. What is the lease amount of work needed to get to the base case?
    if(number === 0){
        console.log("Reached base case");
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }
}
countDownAndUp(3);

// old decimal to binary logic
const decimalToBinary = (input) => {
    let binary = "";
    if(input === 0){
        binary = "0";
    }
    while(input > 0){
        binary = (input % 2) + binary; //this utilizes concatnation rather than pushing, reversing values in a binary array
        input = Math.floor(input / 2);

    }
    result.innerText = binary;
}

// old decimal to binary logic
const decToBin = (input) => { func to replace line 5. Not as optimized
    const inputs = [];
    const quotients = [];
    const remainders = [];

    // if statement to check if input = 0
    if(input === 0){
        result.innerText = "0";
        return;
    }

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