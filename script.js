const displayPlayerTurn = document.getElementById("game-info-span")
const displayGameInfo = document.getElementById("game-info")
let xoryTurn = "X"

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

for(let i=1; i<=9; i++){
    document.getElementById(i).addEventListener("click", () => {
        if(document.getElementById(i).textContent == ""){
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
        } else if(checkWhoWon() === 'O'){
            displayGameInfo.innerHTML = "O won"
        }
        }
    })
}