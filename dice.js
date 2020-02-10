const body = document.body
const container = $('#container')
const makeDiceBtn = $('#make-dice-button')
const rollDiceBtn = $('#roll-dice-button')
const sumDiceBtn = $('#sum-dice-button')
let diceCtr = 0
let diceArr = [];
$(body).append(container)

class Dice {
    constructor(value) {
        this.value = value
        this.dice = $('<div class="dice"></div>')
        this.dice.id = diceCtr++
        this.roll()
        diceArr.push(this.value)
        console.log(diceArr)
        $(container).append(this.dice)
        this.dice.click(() => { this.roll() })
        this.dice.dblclick(() => { 
            alert('You have double-clicked.')
            $(container).remove(this.dice)
        })
    }
    
    roll() {
        let randomVal = Math.floor(Math.random() * 6) + 1
        this.value = randomVal
        this.dice.text(`${this.value}`)
    }
}

function makeDice() {
    new Dice()
    console.log('click')
}
makeDiceBtn.click(() => makeDice());

function rollDice() {
    let allDice = $('.dice');
    console.log(allDice)
    // allDice.forEach(element => {
    //     console.log(element);
    // });
    // allDice.forEach(dice => {
    //     let reroll = Math.floor(Math.random() * 6) + 1
    //     dice.text(reroll)
    // });
    // allDice.text(`${reroll}`)
    // console.log('reroll')
    // console.log(this.value)
}

rollDiceBtn.click(() => rollDice());

function diceSum() {
    let sum = 0
    diceArr.forEach(dice => {
        sum = sum + dice.value
    });
    console.log(sum)
    alert(sum);
    // if (diceArr === 0) {
    //     console.log("Can't do that! No dice man!")
    // } else {
    //     let sum = sum + diceArr
    //     alert(sum)
    // }
}

sumDiceBtn.click(() => diceSum())