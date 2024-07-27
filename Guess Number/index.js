const minNum = 10;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum +1) + minNum) ;


let guess;
let attempt = 0;
let running = true;

while(running){
    guess = window.prompt(`Enter the Number between ${minNum} to ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid Number");
    }
    else if(guess<minNum || guess > maxNum){
        window.alert("Enter the valid number");

    }
    else{
        attempt++;
        if(guess < answer){
            window.alert("Number entered is too low!");
        }
        else if(guess > answer){
            window.alert("Number entered is too high!");
        }
        else{
            window.alert(`CORRECT GUESS!! You have entered ${guess}, It took you ${attempt} attempts`);
            running = false;
        }
    }

    
}