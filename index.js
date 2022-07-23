import characterData from "./data.js";
import Character from "./Character.js";


let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false;

function getNewMonster(){
  const nextMonsterData =  characterData[monstersArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}


function attack(){
   if(!isWaiting){
      wizard.setDiceHtml()
   monster.setDiceHtml()
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render();
   if(wizard.dead){
         endGame()
  }
  else if(monster.dead){
      isWaiting = true;
      if(monstersArray.length > 0){
         setTimeout(()=> {
            monster = getNewMonster()
            render()
            isWaiting = false;
         }, 1000)
          
      }
      else{
          endGame()
      }
   }
   }
   
   
}


function endGame(){
   isWaiting = true;
   const endMessage = monster.health > wizard.health ? "The Monsters are Victorious"
                     : monster.health < wizard.health ? "The Wizard Wins"
                     : "No victors - all creatures are dead";
   const endEmoji = monster.health > wizard.health ? "☠️"
                     : monster.health < wizard.health ? "🔮"
                     : "☠️"
                     setTimeout(()=>{
                        document.body.innerHTML = `
                            <div class="end-game">
                                <h2>Game Over</h2> 
                                <h3>${endMessage}</h3>
                                <p class="end-emoji">${endEmoji}</p>
                            </div>
                            `
                    }, 1500)
   
}



function render(){
   document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
   document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}


document.getElementById("attack-button").addEventListener("click", attack);


const wizard = new Character(characterData.hero);
let monster = getNewMonster();


render();