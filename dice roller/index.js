function diceRoller(){

    const diceNum = document.getElementById("diceNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values=[];
    const images = [];

    for(let i=0; i < diceNum;i++){
        const value1 = Math.floor(Math.random()*6) +1;
        values.push(value1);
        images.push(`<img src="dice_img/${value1}.png"/ alt="Dice: ${value1}">`)
    }
    diceResult.textContent = `Dice is ${values.join(",")}`;
    diceImage.innerHTML = images.join(" ");
}