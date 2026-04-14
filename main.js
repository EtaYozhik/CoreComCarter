"use strict";
let turn = 2

var board=[["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"],["EMPTY","EMPTY","EMPTY"]]


console.log("HI")

const greeting =document.getElementById("00")

const changeval00=() => {
    let x=turn%2
    console.log(x)
    console.log(turn)
    if(board[0][0]==="EMPTY" && turn % 2===0){
        greeting.textContent="O HERE"
        board[0][0]="O HERE"
        console.log("O REPLACE EMPTY")
        turn++
    }

    if(board[0][0]==="EMPTY" && turn %2===1){
        greeting.textContent="X HERE"
        board[0][0]="X HERE"
        console.log(board)
        console.log("X REPLACE EMPTY")
        turn++
    }
}
