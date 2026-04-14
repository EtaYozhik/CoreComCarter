"use strict";
let turn = 2

var board=[["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"]]

const turntext =document.getElementById("temp")
turntext.textContent="O TURN"



const changeval=(id) => {
    const greeting =document.getElementById(id)
    let x=turn%2
    console.log(x)
    console.log(turn)
    let row= id[0]
    let col=id[1]
    
    if (x===0){
        turntext.textContent="X TURN"
    }
    if (x===1){
        turntext.textContent="O TURN"
    }

    if(board[row][col]==="EMPTY" && turn % 2===0){
        greeting.textContent="O HERE"
        board[row][col]="O HERE"
        console.log("O REPLACE EMPTY")
        turn++
    }

    if(board[row][col]==="EMPTY" && turn %2===1){
        greeting.textContent="X HERE"
        board[row][col]="X HERE"
        console.log(board)
        console.log("X REPLACE EMPTY")
        turn++
    }
}
