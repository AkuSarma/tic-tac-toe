const displayPlayerTurn = document.getElementById("game-info-span")
const displayGameInfo = document.getElementById("game-info")
const line = document.getElementById("line")
const gameOverMessage = document.getElementById("game-over-message")
let xoryTurn = "X"
let gameCompleted = false

function checkWhoWon() {
    let one = document.getElementById("1").textContent
    let two = document.getElementById("2").textContent
    let three = document.getElementById("3").textContent
    let four = document.getElementById("4").textContent
    let five = document.getElementById("5").textContent
    let six = document.getElementById("6").textContent
    let seven = document.getElementById("7").textContent
    let eight = document.getElementById("8").textContent
    let nine = document.getElementById("9").textContent

    if ((one===two && two===three && three==='X') ||
        (four===five && five===six && six==='X') ||
        (seven===eight && eight===nine && nine==='X') ||
        (one===four && four===seven && seven==='X') ||
        (two===five && five===eight && eight==='X') ||
        (three===six && six===nine && nine==='X') ||
        (one===five && five===nine && nine==='X') ||
        (three===five && five===seven && seven==='X')
    ){
            return 'X'
        }
    else if((one===two && two===three && three==='O') ||
    (four===five && five===six && six==='O') ||
    (seven===eight && eight===nine && nine==='O') ||
    (one===four && four===seven && seven==='O') ||
    (two===five && five===eight && eight==='O') ||
    (three===six && six===nine && nine==='O') ||
    (one===five && five===nine && nine==='O') ||
    (three===five && five===seven && seven==='O')
    ){
        return 'O'
    }
}

function displayTheWiningMove(player){
    let one = document.getElementById("1").textContent
    let two = document.getElementById("2").textContent
    let three = document.getElementById("3").textContent
    let four = document.getElementById("4").textContent
    let five = document.getElementById("5").textContent
    let six = document.getElementById("6").textContent
    let seven = document.getElementById("7").textContent
    let eight = document.getElementById("8").textContent
    let nine = document.getElementById("9").textContent

    if(one===two && two===three && three===player){
        line.classList.remove("dont-display")
        line.classList.add("fXline")
    }
    else if(four===five && five===six && six===player) {
        line.classList.remove("dont-display")
        line.classList += "sXline"
    }
    else if(seven===eight && eight===nine && nine===player){
        line.classList.remove("dont-display")
        line.classList += "tXline"
    }
    else if(one===four && four===seven && seven===player) {
        line.classList.remove("dont-display")
        line.classList += "fYline"
    }
    else if(two===five && five===eight && eight===player) {
        line.classList.remove("dont-display")
        line.classList += "sYline"
    }
    else if(three===six && six===nine && nine===player) {
        line.classList.remove("dont-display")
        line.classList += "tYline"
    }
    else if(one===five && five===nine && nine===player) {
        line.classList.remove("dont-display")
        line.classList += "fDline"
    }
    else if(three===five && five===seven && seven===player){
        line.classList.remove("dont-display")
        line.classList += "sDline"
    }
}

function checkIfAllBoxesAreFilled() {
    let one = document.getElementById("1").textContent
    let two = document.getElementById("2").textContent
    let three = document.getElementById("3").textContent
    let four = document.getElementById("4").textContent
    let five = document.getElementById("5").textContent
    let six = document.getElementById("6").textContent
    let seven = document.getElementById("7").textContent
    let eight = document.getElementById("8").textContent
    let nine = document.getElementById("9").textContent

    if(one != "" &&
        two != "" &&
        three != "" &&
        four != "" &&
        five != "" &&
        six != "" &&
        seven != "" &&
        eight != "" &&
        nine != ""
    ){
        return true
    }
}

function gameOver(message) {
    gameOverMessage.textContent = message + " refresh to play again"
}

for(let i=1; i<=9; i++){
    document.getElementById(i).addEventListener("click", () => {
        if(document.getElementById(i).textContent == "" && gameCompleted === false){
            document.getElementById(i).textContent = xoryTurn

        // change player turn
        if (xoryTurn === "X"){
            xoryTurn = "O"
            displayPlayerTurn.textContent = "O"
        } else {
            xoryTurn = "X"
            displayPlayerTurn.textContent = "X"
        }

        // check if anyone won
        if(checkWhoWon() === 'X') {
            displayGameInfo.innerHTML = "X won"
            displayTheWiningMove('X')
            gameCompleted = true
            gameOver("Game completed")
        } else if(checkWhoWon() === 'O'){
            displayGameInfo.innerHTML = "O won"
            displayTheWiningMove('O')
            gameCompleted = true
            gameOver("Game completed")
        }
        
        // check if all boxes are filled
        else if(checkIfAllBoxesAreFilled() === true){
            gameOver("Game Over")
            displayGameInfo.innerHTML = "Draw"
        }
        }
    })
}