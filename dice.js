container = $('#container')
let makeDiceBtn = $('#make-dice-button')
let diceCtr = 0
let body = document.body
let rollDiceBtn = $('#roll-dice-button')

$(body).append(container)
class Dice {
    constructor(value) {
        this.value = value
        this.dice = $('<div class="dice"></div>')
        this.dice.id = diceCtr++
        this.roll()
        $(container).append(this.dice)
        this.dice.click(() => { this.roll() })
    }
    
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1
        this.dice.text(`${this.value}`)
    }
}

function makeDice() {
    new Dice()
    console.log('click')
}
makeDiceBtn.click(() => makeDice());

function rollDice() {
    let allDice = $('.dice')
    let reroll = Math.floor(Math.random() * 6) + 1
    allDice.text(`${reroll}`)
    console.log('reroll')
    console.log(this.value)
}

rollDiceBtn.click(() => rollDice());