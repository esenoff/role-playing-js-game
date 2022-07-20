import { getDiceRollArray } from "./utils.js";

function Character(data){
   
    Object.assign(this, data)
 
    this.getDiceHtml = function(diceCount){
       return getDiceRollArray(diceCount).map(num => `<div class="dice">${num}</div>`).join('');
    }
 
    this.getCharacterHtml = function(){
       const {id, name, avatar, health, diceCount, getDiceHtml} = this;
       const diceHtml = getDiceHtml(diceCount);
       
       return `<div class="character-card"> 
          <h4 class="name"> ${name} </h4>
          <img class="avatar" src="${avatar}"/> 
          <p class="health">health: <b> ${health} </b></p> 
          <div class="dice-container">
             ${diceHtml}
          </div>
          </div>`
    }
 }

 export default Character;