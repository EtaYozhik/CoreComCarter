let board=[[" "," "," "],[" "," "," "],[" "," "," "]]


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function iswin(){

}

function turn(t){
    return t%2
}

function play(t){

    if (turn(t)===0){
        readline.question(board[0]+"\n"+board[1]+"\n"+board[2] +"\n WHICH COLUMN TO PLAY", col => {
            
            readline.question(board[0]+"\n"+board[1]+"\n"+board[2] +"\n WHICH ROW TO PLAY", row => {
                //console.log(`row: ${row}!`);
                row--
                col--
                board[row][col]="O"

                
                console.log(board[0] + "\n" + board[1] + "\n" + board[2]);
                
                //console.log(col, row)
                //console.log(board)
                t++
                if (t<=8){
                    play(t)
                }
                else{
                    readline.close()
                }
            }); 
        });
    }
    else {
        readline.question(board[0]+"\n"+board[1]+"\n"+board[2] +"\n WHICH COLUMN TO PLAY", col => {
            
            readline.question(board[0]+"\n"+board[1]+"\n"+board[2] +"\n WHICH ROW TO PLAY", row => {
                //console.log(`row: ${row}!`);
                row--
                col--
                board[row][col]="X"

                
                //console.log(board[0] + "\n" + board[1] + "\n" + board[2]);
                
                t++
                if (t<=8){
                    play(t)
                }
                else{
                    readline.close()
                }
            
            }); 
        });
    
        
    }
}
t=0
row=0
col=0

play(t)




