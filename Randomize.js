"use strict";

function randomize(context, boardWidth, boardHeight){
    var normalizedX, normalizedY;
    board = new Array(boardHeight);

    for (var x = 0.5; x < boardHeight * 10; x += 10) {
        normalizedX = normalize(x);
        board[normalizedX] = new Array(boardWidth);
        for (var y = 0.5; y < boardWidth * 10; y += 10) {
            normalizedY = normalize(y);
            if (Math.round(Math.random()) == 1){
                board[normalizedX][normalizedY] = "black";
                colorSquare(context, y + 0.5, x + 0.5);
            }
            else{
                board[normalizedX][normalizedY] = "white";
            }        
        }
    }
}

function initializeEmptyCanvas(boardWidth, boardHeight){
    board = new Array(boardHeight);

    for (var x = 0; x < boardHeight ; x++) {
        board[x] = new Array(boardWidth);
        for (var y = 0; y < boardWidth; y ++) {
            board[x][y] = "white";
        }
    }
}

function colorSquare(context, x, y){ 
    context.fillStyle = "#000000";
    context.fillRect(x,y,9,9);
}

function normalize(x){
    return ((x - 0.5) / 10);
}