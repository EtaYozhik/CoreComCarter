"use strict";
let turn = 2
let win=0
let draw=0
var board=[["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"]]

const turntext =document.getElementById("temp")
turntext.textContent="O TURN"

function iswin(){
/*    for (let r=1; r<2; r++){
        for (let c=1; c<2; c++){
            if (board[r-1][c-1]===board[r][c] && board[r][c]===board[r+1][c+1] && board[r][c]!="EMPTY"){
                win=1
            }
            if (board[r+1][c+1]===board[r][c] && board[r][c]===board[r-1][c-1] && board[r][c]!="EMPTY"){
                win=1
            }
            if (board[r][c-1]===board[r][c] && board[r][c]===board[r][c+1] && board[r][c]!="EMPTY"){
                win=1
            }
            if (board[r-1][c]===board[r][c] && board[r][c]===board[r+1][c] && board[r][c]!="EMPTY"){
                win=1
            }
        }
    }
*/ //Save logic for connect 4
    for(let c=0;c<=2;c++){
        if (board[0][c]===board[1][c] && board[1][c]===board[2][c] && board[1][c]!="EMPTY"){
                    win=1
        }
    }
    for(let r=0;r<=2;r++){
        if (board[r][0]===board[r][1] && board[r][1]===board[r][2] && board[r][1]!="EMPTY"){
                    win=1
        }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[1][1]!="EMPTY") {win = 1}
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1]!="EMPTY") {win = 1}
}



const changeval=(id) => {
    const greeting =document.getElementById(id)
    let x=turn%2
    console.log(x)
    console.log(turn)
    let row= id[0]
    let col=id[1]
    


    if(board[row][col]==="EMPTY" && turn % 2===0){
        greeting.textContent="O HERE"
        board[row][col]="O HERE"
        console.log("O REPLACE EMPTY")
        turn++
        turntext.textContent="X TURN"
    }

    if(board[row][col]==="EMPTY" && turn %2===1){
        greeting.textContent="X HERE"
        board[row][col]="X HERE"
        console.log(board)
        console.log("X REPLACE EMPTY")
        turn++
        turntext.textContent="O TURN"
    }
    

    iswin()
    if (win === 1) {
        console.log("SOMEONE WON");
        document.getElementById("winPopup").style.display = "flex";
    }
    

    console.log(win)
    console.log(turn)
    if (turn===11){
        draw=1
    }
    if (draw === 1 && win===0) {
        const wintext =document.getElementById("wintext")
        wintext.textContent="Nobody won... U guys must be bad at this..."
        document.getElementById("winPopup").style.display = "flex";
    }
}
