/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
   .then(response => response.json()) //converting into readable format using json
   .then(data => console.log(data.weight))
   .catch(error => console.error(error));*/




async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could Not FETCH resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
         imgElement.style.width = "10%";
    }

    catch(error){
        console.log(error);
    }
}
