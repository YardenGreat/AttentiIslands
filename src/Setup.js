"use strict";
var board, boardWidth, boardHeight;


function getSquare(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%10,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%10
    };
}

function drawGrid(context, isDrawEnabled) {
    handleInputDiv();
    boardWidth = document.getElementById("boardWidth").value;
    boardHeight = document.getElementById("boardHeight").value;
    document.getElementById("myCanvas").setAttribute('width', boardWidth * 10 + 1);
    document.getElementById("myCanvas").setAttribute('height', boardHeight * 10 + 1);
    for (var x = 0.5; x < boardWidth * 10 + 1; x += 10) {
      context.moveTo(x, 0);
      context.lineTo(x, boardHeight * 10);
    }
    
    for (var y = 0.5; y < boardHeight * 10 + 1; y += 10) {
      context.moveTo(0, y);
      context.lineTo(boardWidth * 10, y);
    }
    
    context.strokeStyle = "#ddd";
    context.stroke();
    if (isDrawEnabled){
        initializeEmptyCanvas();       
    }
    else{
        randomize();      
    }
}

function toggleSquare(context, x, y){
    if (board[(y - 1) / 10][(x -1) / 10] == "black"){
        context.fillStyle = "#FFFFFF";
        board[(y - 1) / 10][(x -1) / 10] = "white";
    }
    else{
        context.fillStyle = "#000000";
        board[(y - 1) / 10][(x -1) / 10] = "black";
    }
    
    context.fillRect(x,y,9,9);
}

function restart(){
    location.reload();
}

function enableDraw(){
    document.getElementById("drawButton").classList.add("notShowing");
    document.getElementById("instructionsDiv").innerHTML = "<pre>" +
     "Please Press any squares on the board to paint them black. \
     \nIf you change your mind about a certain square, press it again to repaint it white. \
     \nWhen you're finished, press the 'Solve' button." + "</pre>"
    canvas.addEventListener('click', function(evt) {
        var mousePos = getSquare(canvas, evt);
        toggleSquare(context, mousePos.x, mousePos.y)
    }, false);
    drawGrid(context, true);
}

function handleInputDiv(){
    document.getElementById("solveButton").classList.remove("notShowing");
    document.getElementById("randomizeButton").classList.add("notShowing");
    document.getElementById("drawButton").classList.add("notShowing");
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');