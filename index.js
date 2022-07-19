const hero = {
   id : "hero",
   name : "Wizard",
   avatar : "images/wizard.jpg",
   health : 60,
   diceCount: 3
}

const monster = {
   id : "monster",
   name : "Orc",
   avatar : "images/orc.jpg",
   health : 10,
   diceCount: 1
}

function getDiceRollArray(diceCount){

   return new Array(diceCount).fill(0).map(()=>Math.floor(Math.random()*6)+1)
//    let newDiceRolls = [];
//    for(let i=0; i<diceCount; i++){
//       newDiceRolls.push(Math.floor(Math.random()*6)+1)
//    }
//   return newDiceRolls;
}



function Character(data){
   
   Object.assign(this, data)

   this.getDiceHtml = function(diceCount){
      return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('');
   }

   this.getCharacterHtml = function(){
      const {id, name, avatar, health, diceCount, getDiceHtml} = this;
      const diceHtml = getDiceHtml(diceCount);
      
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
}

const wizard = new Character(hero);
const orc = new Character(monster);
wizard.getCharacterHtml();
orc.getCharacterHtml();

