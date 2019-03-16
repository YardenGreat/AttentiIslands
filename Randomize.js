"use strict";

function randomize(canvas, context, boardWidth, boardHeight){
    var normalizedX, normalizedY;
    board = new Array(boardWidth);

    for (var x = 0.5; x < boardWidth * 10; x += 10) {
        normalizedX = normalize(x);
        board[normalizedX] = new Array(boardHeight);
        for (var y = 0.5; y < boardHeight * 10; y += 10) {
            normalizedY = normalize(y);
            if (Math.round(Math.random()) == 1)
            {
                board[normalizedX][normalizedY] = "black";
                colorSquare(context, y + 0.5, x + 0.5);
            }
            else
            {
                board[normalizedX][normalizedY] = "white";
            }        
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