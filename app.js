console.log(document.getElementById("number"));
let randomNumber = Math.floor((Math.random() * 10) + 1);
let x = 5;

document.getElementById("btn_login_onAction").addEventListener("click", SubAction);
function SubAction() {
    let number = parseInt(document.getElementById("number").value);

    if (x > 0) {
        if (number === randomNumber) {
            document.getElementById('textx').innerHTML = "You are correct! 😍🙌";
            document.getElementById('guessings').innerHTML = `You guessed it in ${5 - x + 1} tries.`;
            x = 0; // End the game
        } else {
            x--;
            if (number < randomNumber) {
                document.getElementById('textx').innerHTML = "You guessed a lesser value. 😂😜";
            } else {
                document.getElementById('textx').innerHTML = "You guessed a higher value. 😂😜";
            }
            document.getElementById('guessings').innerHTML = `You have ${x} guesses left.`;
        }

        if (x === 0 && number !== randomNumber) {
            document.getElementById('textx').innerHTML = `Game over! The correct number was ${randomNumber}.`;
        }
    }
}
let arrays = [
    {
        name:"Hiru",
        age:18,
        address:"Godagama"
    },
    {
        name:"Hiru",
        age:18,
        address:"Godagama"
    },
    12,
    [
        {
            name:"Hiru"
        },
        {
            name:"Vinu"
        }
    ],
    {
        name:"Hiru",
        age:18,
        address:"Godagama"
    },
    {},
    {}
]
console.log(arrays);
console.log(arrays[3]);

arrays.forEach(obj => {
    console.log(obj.name);
    console.log(obj['name']);
})