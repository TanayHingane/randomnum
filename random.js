const minNum = 1;
const maxNum = 100;
const num = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid number`);
    }
    else{
        attempts++;
        if(guess < num){
            window.alert("Too low! Try Again!");
        }
        else if(guess > num){
            window.alert("Too high! Try Again!");
        }
        else{
            window.alert(`You guessed it! The ans was ${num}, It took you ${attempts} attempts!`);
            running = false;
        }
    }
}
