status_1 = "";
object_name_user_given = "";

function preload() {}

function setup() {
    canvas = createCanvas(320, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function give_to_detection() {
    object_name_user_given = document.getElementById("object_name_input").value;
    console.log(object_name_user_given);
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : DETECTING OBJECTS";
}

function modelLoaded() {
    console.log("MODEL LOADED");
    status_1 = true;
}

function draw() {
    image(video, 0, 0, 320, 250);
}