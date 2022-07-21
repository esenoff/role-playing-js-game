import characterData from "./data.js";
import Character from "./Character.js";


function attack(){
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)

   if(wizard.dead || orc.dead ){
      endGame();
   }
   render();
}

function endGame(){
   const endMessage = orc.health > wizard.health ? "The Orc is Victorious"
                     : orc.health < wizard.health ? "The Wizard Wins"
                     : "No victors - all creatures are dead";
   const endEmoji = orc.health > wizard.health ? "☠️"
                     : orc.health < wizard.health ? "🔮"
                     : "☠️";
   document.body.innerHTML = `<div class="end-game">
   <h2>Game Over</h2>
   <h3>${endMessage}</h3>
   <p class="end-emoji">${endEmoji}</p>
</div>`
}


function render(){
   document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
   document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener("click", attack);

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();


