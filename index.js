const hero = {
   id : "hero",
   name : "Wizard",
   avatar : "images/wizard.jpg",
   health : 60,
   diceRoll: [3, 1, 4],
   diceCount: 3
}

const monster = {
   id : "monster",
   name : "Orc",
   avatar : "images/orc.jpg",
   health : 10,
   diceRoll: [6],
   diceCount: 1
}

function renderCharacter(data){
      const {id, name, avatar, health, dice, diceRoll} = data;

      const diceHtml = diceRoll.map(num => `<div class="dice">${num}</div>`).join('');
      
      document.getElementById(id).innerHTML = 
         `<div class="character-card"> 
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/> 
         <p class="health">health: <b> ${health} </b></p> 
         <div class="dice-container">
            ${diceHtml}
         </div>
         </div>`
}

renderCharacter(hero);
renderCharacter(monster);