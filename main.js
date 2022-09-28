function preload() {
    image_dog_cat = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();


}

function draw() {
    image(image_dog_cat, 0, 0, 700, 500);
   noFill();
    stroke("green");
    rect( 330,40,300,450);
    fill("green");
    textSize(30);
    text("Cat", 340,70);


    noFill();
    stroke("green");
    rect( 130,40,300,450);
    fill("green");
    textSize(30);
    text("Dog", 140,70);
}