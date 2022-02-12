function preload(){}

function setup(){
    canvas=createCanvas(600 , 500);
    canvas.position(300,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill("red");
    rect(25 , 25, 500 , 50);
    rect(525 , 25, 50 , 400);
    rect(25 , 425, 500 , 50);
    rect(25 , 25, 50 , 400);
    fill("lightgreen");
    circle(50 , 50 , 100);
    circle(550 , 50 , 100);
    circle(550 , 450 , 100);
    circle(50 , 450 , 100);
    image(video , 85 , 85 , 430 , 330);
}

function take_snapshot(){
    save("snap.png");
}