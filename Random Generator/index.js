let max=100;
let min=10;
const text = document.getElementById("textrandom");
const roll = document.getElementById("Roll");
//console.log(random);
roll.onclick = function(){
    random = Math.floor(Math.random()*max) + min;
  text.textContent = `Generated Random Number is : ${random}` ;
}