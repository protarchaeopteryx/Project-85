canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
green_car_width = 75;
green_car_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
green_car_x = 5;
green_car_y = 225;
function add() {
	bg_imgTag = new Image();
	bg_imgTag.onload = uploadBackground;
	bg_imgTag.src = background_image;
	green_car_imgTag = new Image();
	green_car_imgTag.onload = uploadgreencar;
	green_car_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(green_car_imgTag,green_car_x,green_car_y,green_car_width,green_car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if (green_car_y > 10){
		green_car_y = green_car_y - 10;
		uploadBackground()
		uploadgreencar()
	}
}

function down(){
	if (green_car_y < 300){
		green_car_y = green_car_y + 10;
		uploadBackground()
		uploadgreencar()
	}
}

function left(){
	if (green_car_x > 10){
		green_car_x = green_car_x - 10;
		uploadBackground()
		uploadgreencar()
	}
}

function right(){
	if (green_car_x <= 725){
		green_car_x = green_car_x + 10;
		uploadBackground()
		uploadgreencar()
	}
}
