alert("It is the zombie apocalypse! You are scavaging a local hardware store for supplies when a zombie appears down the aisle and starts walking towards you!")

var weaponArray = ["axe", "baseball bat", "rubber chicken", "lead pipe", "wooden 2x4", "shovel", "crowbar"];

function randNumb (range) {
    return Math.round(Math.random() * range);
}

var weapon = weaponArray [randNumb(weaponArray.length - 1 ) ];

alert("You frantically look through your stuff and pull out a(n) " + weapon + ".");

//prompt("The weapon your character pull out is " + weapon +", do you choose this weapon?");
//Implement choice later

alert("The zombie appears before you!");

var survival = randNumb(6);

switch (survival) {
    case 0:
        alert("You decapitated the zombie and it dies!")
        break;
    case 1:
        alert("You incapacitate the zombie and you run away!")
        break;
    case 2:
        alert("The zombie is hungry for brains and goes past you.")
        break;
    case 3:
        alert("You hit the zombie but doesn't seem to get harmed. The zombie bites you!")
        break;
    case 4:
        alert("You missed! The zombie goes for a fatal bite and you die!")
    default:alert("You missed the zombie, but the zombie just stands there.")
        break;
}