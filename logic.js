
function changeVal(){
    console.log(cSize.value, oSpeed.value, oChaos.value)
}


if ( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = ( function() {

        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {

            window.setTimeout( callback, 1000 / 60 );

        };

    } )();
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var i = 0;
var redraw = function() {
    // obj ref, NOT val 
    var cSize = document.getElementById("slide1");
    var oSpeed = document.getElementById("slide2");
    var oChaos = document.getElementById("slide3");
    
    ctx.save();
    
    // paint bg
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";;
    ctx.clearRect(0, 0, 1200, 800);

    // set origin to center
    ctx.translate(900, 280);

    // draw center
    ctx.beginPath();
    ctx.fillStyle = 'rgba(29, 13, 31, 0.171)';
    ctx.arc(0, 0, cSize.value * 15, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();

    // move moon
    ctx.rotate(i / (oSpeed.value**2));
    ctx.translate(200, 0);

    var s = Math.sin(i) * (oChaos.value * 10)
    var c = Math.cos(i) * (oChaos.value * 10)
    // draw moon
    ctx.beginPath();
    ctx.fillStyle = 'rgba(29, 13, 31, 0.171)';
    ctx.arc(s, c, 20, 0, (2 * Math.PI), true);
    ctx.closePath();
    ctx.fill();
    
    ctx.restore();
    
    i++;
    
    window.requestAnimationFrame(redraw);
};

window.requestAnimationFrame(redraw);