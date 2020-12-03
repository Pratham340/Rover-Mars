canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_images_mars=["mars_1.jpg","mars_2.jpg","rover_1.jpg","rover_2.jpg","mars.jpg"];

random_nos=Math.floor(Math.random()*5);
rover_width=100;
rover_height=90;

background_image=nasa_images_mars[random_nos];

rover_x= 10;
rover_y=10;

rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    rover_imgtag = new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
   keypressed=e.keyCode ;
   console.log(keypressed);

   if(keypressed == '38')
   {
       up();
   }
   if(keypressed == '40')
   {
       down();
   }
   if(keypressed == '37')
   {
       left();
   }
   if(keypressed == '39')
   {
       right();
   }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
    }

}

function down(){
    if(rover_y <=510){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
    }

}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
    }

}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
    }

}