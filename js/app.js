// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.

// 7) Create reset functionality.

/*-------------------------------- Constants --------------------------------*/

const boredomEl = document.querySelector('#boredom-stat');
const sleepinessEl = document.querySelector('#sleepiness-stat');
const hungerEl = document.querySelector('#hunger-stat')
const messageEl = document.querySelector('#message')
const resetEl = document.querySelector('#restart')
const playEl = document.querySelector('#play')
const feedEl = document.querySelector('#feed')
const sleepEl = document.querySelector('#sleep')

/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0
}

let timer;

let gameOver = false;
/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function runGame() {
    updateStates()
    checkGameOver()
    render()
}

function render() {
    boredomEl.textContent = state.boredom
    sleepinessEl.textContent = state.sleepiness
    hungerEl.textContent = state.hunger
    if (gameOver === true) {
        clearInterval(timer)
        messageEl.classList.remove('hidden')
        resetEl.classList.remove('hidden')
    }
}

function checkGameOver() {
    if (state.boredom >= 10 || state.sleepiness >= 10 || state.hunger >= 10) {
        gameOver = true
    }
}

function updateStates() {
   state.boredom += Math.floor(Math.random() * 3) + 1;
   state.hunger += Math.floor(Math.random() * 3) + 1;
   state.sleepiness += Math.floor(Math.random() * 3) + 1;
}

function init() {
    resetEl.classList.add('hidden')
    messageEl.classList.add('hidden')
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    gameOver = false
    timer = setInterval(runGame, 2000)
}

function playBtnClick() {
    state.boredom = 0
    render()
}
function sleepBtnClick() {
    state.sleepiness = 0
    render()
}
function feedBtnClick() {
    state.hunger = 0
    render()
}
init()
/*----------------------------- Event Listeners -----------------------------*/
playEl.addEventListener('click', playBtnClick)
sleepEl.addEventListener('click', sleepBtnClick)
feedEl.addEventListener('click', feedBtnClick)
resetEl.addEventListener('click', init)


