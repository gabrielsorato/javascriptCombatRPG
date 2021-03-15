/*
COMBAT PHASES
1 - The character roll the attack (20 sided dice)
2 - The enemy validates the damage (Compare the value of the attack roll with the value of the armor class)
3 - If the attack value is greater, the character rolls the damage, plus bonus. 
*/


let d20 = Math.floor(Math.random () * 20 + 1);
let d8 = Math.floor(Math.random () * 8 + 1);
let bonusRoll = 2
let armorClass = 14
let attack = d20 + bonusRoll
let bonusDamage = 5;
let damage = d8 + bonusDamage

console.log(`Your d20 roll is ${d20}, and your bonus attack is ${bonusRoll}`)
console.log(`Your total attack is: ${attack}`);
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
    console.log(`Your d8 roll is ${d8}, and your bonus damage is ${bonusDamage}`)
    console.log(`Your damage is: ${damage}`)
};






 

