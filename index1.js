img = "";
status = "";
objects = [];

function exit() {
    window.location = "index.html"
}

function preload() {
    img = loadImage('bottle.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log("error");
    }
    console.log(results);
    objects = results;
}