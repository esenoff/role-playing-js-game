const hero = {
   id : "hero",
   name : "Wizard",
   avatar : "images/wizard.jpg",
   health : 60,
   dice : 6
}

const monster = {
   id : "monster",
   name : "Orc",
   avatar : "images/orc.jpg",
   health : 10,
   dice : 4
}

function renderCharacter(data){
         return document.getElementById(data.id).innerHTML = 
         `<div class="character-card"> 
         <h4 class="name"> ${data.name} </h4>
         <img class="avatar" src="${data.avatar}"/> 
         <p class="health">health: <b> ${data.health} </b></p> 
         <div class="dice-container">
         <div class="dice"> ${data.dice} </div></div>
         </div>`
}

renderCharacter(hero);
renderCharacter(monster);