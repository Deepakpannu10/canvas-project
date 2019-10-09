// (function () {
//     var cnv = document.getElementById("canvas");
//     cnv.addEventListener('mousedown', onmouseclick);
//     function onmouseclick(){
//         alert("you clicked mouse");
//     }
// })()
(function () {
    var isdrawing = false;
    var iserasing = false;


    // canvas
    var cnv = document.getElementById("canvas");
    var ctx = cnv.getContext("2d");
    var location;
    ctx.strokeStyle = "#FFFFFF";
    
    
    // ctx.clearRect();



    // var isstickymoving=true;

    // using buttons buttons...
    // var btn=document.getElementById("pen");
    // document.getElementById("myBtn").onclick = function() {myFunction()};
    // btn.addEventListener("click",myFunction);


    var pen = document.getElementById("PEN");
    var eraser = document.getElementById("ERASER");
    var stickynotes = document.getElementById("stickynotes");
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    var small = document.getElementById("small");
    var medium = document.getElementById("medium");
    var large = document.getElementById("large");
    var smaller = document.getElementById("smaller");
    var mediumer = document.getElementById("mediumer");
    var largeer = document.getElementById("largeer");
   
    var eraserprop = {
        width: 6,
        height: 6
    }
    function onResize() {
        canvas.width = window.innerWidth - 5;
        canvas.height = window.innerHeight - 60;
    }

    init();
    function init() {
        // var rect = board.getBoundingClientRect();
        // board.height = rect.height;
        // board.width = rect.width;

        window.addEventListener('resize', onResize, false);
        onResize();
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
    }
    // sticky textarea

    var mode = "";

    function creatingsticky() {
        mode = "stickytext";
    }
    stickynotes.addEventListener("click", creatingsticky);

    function penmode() {
        mode = "pen";
        ctx.lineWidth = 4;
        ctx.strokeStyle="white";
        // isdrawing=true;
        // iserasing=false;
    }
    pen.addEventListener("click", penmode);

    function erasermode() {
        mode = "eraser";
        eraserprop.width = 9;
        eraserprop.height = 9;
        // isdrawing=false;
        // iserasing=true;
    }
    eraser.addEventListener("click", erasermode);





    // reseting the eraser


    // eraser and eraser size
    function smalleraser() {
        
        eraserprop.width = 6;
        eraserprop.height = 6;

    }
    smaller.addEventListener("click", smalleraser);
    function mediumeraser() {
        eraserprop.width = 13;
        eraserprop.height = 13;

    }
    mediumer.addEventListener("click", mediumeraser);
    function largeeraser() {
        eraserprop.width = 20;
        eraserprop.height = 20;
    }
    largeer.addEventListener("click", largeeraser);



    // pen colour and size related work....
    function bluechangecolor() {
        ctx.strokeStyle = "#0000FF";

    }
    blue.addEventListener("click", bluechangecolor);

    function redchangecolor() {
        ctx.strokeStyle = "red";

    }
    red.addEventListener("click", redchangecolor);

    function yellowchangecolor() {
        ctx.strokeStyle = "yellow";

    }
    yellow.addEventListener("click", yellowchangecolor);

    function greenchangecolor() {
        ctx.strokeStyle = "green";

    }
    green.addEventListener("click", greenchangecolor);

    function smallpen() {
        ctx.lineWidth = 2;

    }
    small.addEventListener("click", smallpen);

    function mediumpen() {
        ctx.lineWidth = 7;

    }
    medium.addEventListener("click", mediumpen);

    function largepen() {
        ctx.lineWidth = 10;

    }
    large.addEventListener("click", largepen);



    // drawing related work...
    var getlocation = function () {
        var rect = cnv.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    function onmousedown() {

        location = getlocation();


        if (mode === "stickytext") {
                // console.log("hjkh");
            var sticky = document.createElement("TEXTAREA");
            // sticky.value = "x: " + location.x + " y: " + location.y;
            sticky.style.position = 'absolute';
            sticky.style.top = location.y + 60 +'px';
            sticky.style.left = location.x + 10 + 'px';
            document.body.appendChild(sticky);
        }else if(mode==="pen"){
            isdrawing=true;
        }else if(mode==="eraser"){
            iserasing=true;
        }

    }
    function onmousemove() {
        if (isdrawing === true&&mode==="pen") {
            console.log(location.x + " : " + location.y);
            ctx.beginPath();
            ctx.moveTo(location.x, location.y);
            location = getlocation();
            ctx.lineTo(location.x, location.y);
            ctx.stroke();
            ctx.closePath();
        } else if (iserasing === true&&mode==="eraser") {
            // ctx.beginPath();
            location = getlocation();
            ctx.clearRect(location.x, location.y, eraserprop.width, eraserprop.height);
            // ctx.closePath();
        }
    }
    function onmouseup() {
        isdrawing = false;
        iserasing = false;
    }

    cnv.addEventListener('mousedown', onmousedown);
    cnv.addEventListener('mousemove', onmousemove);
    cnv.addEventListener('mouseup', onmouseup);
    // cnv.addEventListener("onclick", changecolor);



})()





/*
(function () {
    var isdrawing = false;
    var iserasing = false;
    // var isstickymoving=true;
    // using buttons buttons...
    // var btn=document.getElementById("pen");
    // document.getElementById("myBtn").onclick = function() {myFunction()};
    // btn.addEventListener("click",myFunction);
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var blue = document.getElementById("blue");
    var green = document.getElementById("green");
    var small = document.getElementById("small");
    var medium = document.getElementById("medium");
    var large = document.getElementById("large");
    var smaller = document.getElementById("smaller");
    var mediumer = document.getElementById("mediumer");
    var largeer = document.getElementById("largeer");
    // var reset=document.getElementById("reset");
    var eraserprop = {
        width: 6,
        height: 6
    }
    // canvas
    var cnv = document.getElementById("canvas");
    var ctx = cnv.getContext("2d");
    var location;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    // ctx.clearRect();
    // reseting the eraser
    // eraser and eraser size
    var eraser=false;
    function smalleraser() {
        eraser = true;
        eraserprop.width = 4;
        eraserprop.height = 4;
    }
    smaller.addEventListener("click", smalleraser);
    function mediumeraser() {
        eraser = true;
        eraserprop.width = 8;
        eraserprop.height = 8;
    }
    mediumer.addEventListener("click", mediumeraser);
    function largeeraser() {
        eraser = true;
        eraserprop.width = 10;
        eraserprop.height = 10;
    }
    largeer.addEventListener("click", largeeraser);
    // pen colour and size related work....
    function bluechangecolor() {
        ctx.strokeStyle = "#0000FF";
    }
    blue.addEventListener("click", bluechangecolor);

    function redchangecolor() {
        ctx.strokeStyle = "red";
    }
    red.addEventListener("click", redchangecolor);

    function yellowchangecolor() {
        ctx.strokeStyle = "yellow";
    }
    yellow.addEventListener("click", yellowchangecolor);

    function greenchangecolor() {
        ctx.strokeStyle = "green";
    }
    green.addEventListener("click", greenchangecolor);

    function smallpen() {
        ctx.lineWidth = 1;
    }
    small.addEventListener("click", smallpen);

    function mediumpen() {
        ctx.lineWidth = 4;
    }
    medium.addEventListener("click", mediumpen);

    function largepen() {
        ctx.lineWidth = 8;
    }
    large.addEventListener("click", largepen);
    // drawing related work...
    var getlocation = function () {
        var rect = cnv.getBoundingClientRect();
        return {
            x: event.clientX - rect.x,
            y: event.clientY - rect.y
        }
    }
    function onmousedown() {
        location = getlocation();
        if (eraser != true) {
            isdrawing = true;
        }else{
            iserasing=eraser;
        }
    }
    function onmousemove() {
        if (isdrawing === true) {
            ctx.beginPath();
            ctx.moveTo(location.x, location.y);
            location = getlocation();
            ctx.lineTo(location.x, location.y);
            ctx.stroke();
            ctx.closePath();
        } else if (iserasing === true) {
            // ctx.beginPath();
            location = getlocation();
            ctx.clearRect(location.x, location.y, eraserprop.width, eraserprop.height);
            // ctx.closePath();
        }
    }
    function onmouseup(){
        isdrawing = false;
        iserasing = false;
        eraser=false;
    }
    function resetsetting(){
        iserasing=false;
        isdrawing=true;
    }
    // reset.addEventListener('reset',resetsetting);
    cnv.addEventListener('mousedown', onmousedown);
    cnv.addEventListener('mousemove', onmousemove);
    cnv.addEventListener('mouseup', onmouseup);
    // cnv.addEventListener("onclick", changecolor);
})()
*/