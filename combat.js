/*

COMBAT PHASES
1 - The character roll the attack (20 sided dice)
2 - The enemy validates the damage (Compare the value of the attack roll with the value of the armor class)
3 - If the attack value is greater, the character rolls the damage, plus bonus. 

*/


let dice = Math.floor(Math.random () * 20 + 1);
let damage = Math.floor(Math.random () * 8 + 1);
let bonusAttack = 2
let armorClass = 14
let attack = dice + bonusAttack

console.log(`Your attack is: ${attack}`);
console.log(`The enemy's armor class is: ${armorClass}`);

let sucess = attack >= armorClass
let fail = armorClass > attack

if (sucess) {
    console.log('Damage sucess')
} else if (fail) {
    console.log('Damage failure') 
} else {
    console.log('Invalid value')
}

if (sucess) {
    console.log(`Your damage is: ${damage}`)
};






 

