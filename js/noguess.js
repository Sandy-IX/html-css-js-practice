const max = 100;
const min = 1;
const randomNum = Math.floor(Math.random()* (max - min)) + 1;
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between  ${min} - ${max}`);
    guess = Number(guess);
        if(isNaN(guess)){
            window.alert("Enter a valid number");
        }
        else if (guess < min || guess > max ){
            window.alert("Enter a valid number");
        }
        else{
            attempts++;
            if (guess < randomNum)
            {
                window.alert("TOO LOW! TRY AGAIN!");
            }
            else if(guess > randomNum){
                window.alert("TOO HIGH! TRY AGAIN!");
            }
            else{
                window.alert(`CORRECT! The answer was ${randomNum}. It took you ${attempts} attempts.`);
                running =false;
            }
        }
}

