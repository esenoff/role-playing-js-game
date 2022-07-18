/*
Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 
*/

const heroId = "hero";
const heroName = "Wizard";
const heroAvatar = "images/wizard.jpg";
const heroHealth = 60;
const heroDiceRoll = 6;


const monsterId = "monster";
const monsterName = "Orc";
const monsterAvatar = "images/orc.jpg";
const monsterHealth = 10;
const monsterDiceRoll = 4;

function renderCharacter(id, name, avatar, health, dice){
         return document.getElementById(id).innerHTML = 
         `<div class="character-card"> 
         <h4 class="name"> ${name} </h4>
         <img class="avatar" src="${avatar}"/> 
         <p class="health">health: <b> ${health} </b></p> 
         <div class="dice-container">
         <div class="dice"> ${dice} </div></div>
         </div>`
}

renderCharacter(heroId, heroName, heroAvatar, heroHealth, heroDiceRoll);
renderCharacter(monsterId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll);