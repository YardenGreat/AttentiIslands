function getSquare(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%10,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%10
    };
}

function drawGrid(context) {
    for (var x = 0.5; x < 10001; x += 10) {
      context.moveTo(x, 0);
      context.lineTo(x, 10000);
    }
    
    for (var y = 0.5; y < 10001; y += 10) {
      context.moveTo(0, y);
      context.lineTo(10000, y);
    }
    
    context.strokeStyle = "#ddd";
    context.stroke();
}

function fillSquare(context, x, y){
    context.fillStyle = "gray"
    context.fillRect(x,y,9,9);
}

debugger;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

drawGrid(context);

canvas.addEventListener('click', function(evt) {
    var mousePos = getSquare(canvas, evt);
    fillSquare(context, mousePos.x, mousePos.y)
}, false);