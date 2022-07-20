import characterData from "./data.js";
import Character from "./Character.js";



const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render(){
   document.getElementById(wizard.id).innerHTML = wizard.getCharacterHtml();
   document.getElementById(orc.id).innerHTML = orc.getCharacterHtml();
}

render();


