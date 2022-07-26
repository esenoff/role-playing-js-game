function getDiceRollArray(diceCount){

    return new Array(diceCount).fill(0).map(()=>Math.floor(Math.random()*6)+1)
 //    let newDiceRolls = [];
 //    for(let i=0; i<diceCount; i++){
 //       newDiceRolls.push(Math.floor(Math.random()*6)+1)
 //    }
 //   return newDiceRolls;
 }

 function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(()=>`<div class="placeholder-dice"></div>`).join('')
}


const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth


 export {getDiceRollArray, getDicePlaceholderHtml, getPercentage};