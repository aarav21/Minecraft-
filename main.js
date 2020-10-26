var canvas = new fabric.Canvas("myCanvas");

var player_X = 100;
var player_y = 200;

var block_height = 30;

var block_width = 30;

var player_object = "";
var block_object = "";

function draw_player() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        console.log(player_object);
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_X
        });
        canvas.add(player_object);
    });
}

function draw_Block(block) {
    fabric.Image.fromURL(block, function (Img) {
        block_object = Img;
        console.log(block_object);
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_X
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", key_down);

function key_down(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (e.shiftKey == true && keypress == "80") {
        block_width = block_width + 10;
        block_height = block_height + 10;
        console.log("test1");

        document.getElementById("current_Width").innerHTML = block_width;
        document.getElementById("current_Height").innerHTML = block_height;

    }

    if (e.shiftKey == true && keypress == "77") {
        block_width = block_width - 10;
        block_height = block_height - 10;
        console.log("test2");
        document.getElementById("current_Width").innerHTML = block_width;
        document.getElementById("current_Height").innerHTML = block_height;


    }

    if (keypress == "38") {
        up();
        console.log("up");

    }

    if (keypress == "40") {
        down();
        console.log("down");

    }

    if (keypress == "37") {
        left();
        console.log("left");

    }

    if (keypress == "39") {
        right();
        console.log("right");

    }

    /* Block Call*/

    if (keypress == "67"){
        draw_Block("cloud.jpg");
        console.log("C");
    }

    if (keypress == "68"){
        draw_Block("dark_green.png");
        console.log("D");
    }

    if (keypress == "71"){
        draw_Block("ground.png");
        console.log("G");
    }

    if (keypress == "76"){
        draw_Block("light_green.png");
        console.log("L");
    }

    
    if (keypress == "82"){
        draw_Block("roof.jpg");
        console.log("R");
    }

    
    if (keypress == "84"){
        draw_Block("trunk.jpg");
        console.log("T");
    }

    
    if (keypress == "85"){
        draw_Block("unique.png");
        console.log("U");
    }

    
    if (keypress == "87"){
        draw_Block("wall.jpg");
        console.log("W");
    }

    
    if (keypress == "89"){
        draw_Block("yellow_wall.png");
        console.log("Y");
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_height;
        canvas.remove(player_object);
        draw_player();
    }
}

function down(){
    if(player_y<= 500){
        player_y = player_y + block_height;
        canvas.remove(player_object);
        draw_player();
    }
}

function right(){
    if(player_X<= 850){
        player_X = player_X + block_width;
        canvas.remove(player_object);
        draw_player();
    }
}

function left(){
    if(player_X>=0){
        player_X = player_X - block_width;
        canvas.remove(player_object);
        draw_player();
    }
}