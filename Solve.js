"use strict";
var colorArray = ['#FF6633', '#E444FF', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#55554D', '#991AFF', '#FFB399', '#4DB3FF', '#1AB399',
		  '#E555B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#5555FF'];
var currentColorIndex = 0;


function solve(){
    document.getElementById("solveButton").classList.add("notShowing");
    document.getElementById("restartButton").classList.remove("notShowing");
    var row, column;
    var numberOfIslands = 0;
    for (row = 0; row < boardWidth; row++){
        for (column = 0; column < boardHeight; column++){
            if (isBlack(row, column)){
                colorIsland(row, column);
                currentColorIndex++;
                numberOfIslands++;

                if (currentColorIndex == colorArray.length){
                    currentColorIndex = 0;
                }
            }
        }
    }

    console.log(numberOfIslands);
}

function isBlack(row, column){
    return (board[row][column] == "black");
}

function isChecked(row, column){
    return (board[row][column] == "checked");
}

function colorIsland(row, column){
    var queue = [];
    var currentRec;
    queue.push({row: row, column: column});
    colorSquareInIsland(context, denormalize(column), denormalize(row));
    board[row][column] = "checked";

    while (queue.length > 0){
        currentRec = queue.shift();
        checkAllAdjacentCells(currentRec.row, currentRec.column, queue);
    }
}

function checkAllAdjacentCells(row, column, queue){
    if (row > 0){
        if (column > 0 && isBlack(row - 1, column - 1)){
            board[row - 1][column - 1] = "checked";
            queue.push({row: row - 1, column: column - 1});
            colorSquareInIsland(context, denormalize(column - 1), denormalize(row - 1));
        }
        if (isBlack(row - 1, column)){
            board[row - 1][column] = "checked";
            queue.push({row: row - 1, column: column});
            colorSquareInIsland(context, denormalize(column), denormalize(row - 1));
        }
        if (column < boardWidth - 1 && isBlack(row - 1, column + 1)){
            board[row - 1][column + 1] = "checked";
            queue.push({row: row - 1, column: column + 1});
            colorSquareInIsland(context, denormalize(column + 1), denormalize(row - 1));
        }   
    }
    if (row < boardHeight - 1){
        if (column > 0 && isBlack(row + 1, column - 1)){
            board[row + 1][column - 1] = "checked";
            queue.push({row: row + 1, column: column - 1});
            colorSquareInIsland(context, denormalize(column - 1), denormalize(row + 1));
        }
        if (isBlack(row + 1, column)){
            board[row + 1][column] = "checked";
            queue.push({row: row + 1, column: column});
            colorSquareInIsland(context, denormalize(column), denormalize(row + 1));
        }
        if (column < boardWidth - 1 && isBlack(row + 1, column + 1)){
            board[row + 1][column + 1] = "checked";
            queue.push({row: row + 1, column: column + 1});
            colorSquareInIsland(context, denormalize(column + 1), denormalize(row + 1));
        } 
    }
    if (column > 0 && isBlack(row, column - 1)){
        board[row][column - 1] = "checked";
        queue.push({row: row, column: column - 1});
        colorSquareInIsland(context, denormalize(column - 1), denormalize(row));
    }
    if (column < boardWidth - 1 && isBlack(row, column + 1)){
        board[row][column + 1] = "checked";
        queue.push({row: row, column: column + 1});
        colorSquareInIsland(context, denormalize(column + 1), denormalize(row));
    }
}

function colorSquareInIsland(context, x, y){ 
    context.fillStyle = colorArray[currentColorIndex];
    context.fillRect(x,y,9,9);
}

function denormalize(x){
    return (x * 10 + 1);
}