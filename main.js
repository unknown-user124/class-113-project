function preload(){

}

function setup()
 { createCanvas(400, 400); }
 function draw() 
 { fill(0, 128, 0); stroke(0, 128, 0); circle(350, 50, 70); }

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color=document.getElementById("color_name").value;
}
