let cx, cy;
let radius;

function setup() {
	createCanvas(800,800); // make an HTML canvas element width x height pixels
	radius = min(width, height) * 0.8;
	cx = width / 2;
	cy = height / 2;

}

function draw() {
	background(245);
	textSize(32);
	
	fill(200);
	ellipse(cx,cy,radius,radius);

	fill(64, 173, 255);
	ellipse(cx,cy,radius*3/4+second()*radius/240,radius*3/4+second()*radius/240);
	//text(hour(), 10, 30);
	fill(150);
	ellipse(cx,cy,radius*3/4,radius*3/4);

	fill(25, 113, 202);
	ellipse(cx,cy,radius/2+minute()*radius/240,radius/2+minute()*radius/240);

	
	fill(100);
	ellipse(cx,cy,radius/2,radius/2);

	fill(4, 51, 111);
	ellipse(cx,cy,radius/4+hour()*radius/96,+radius/4+hour()*radius/96);

	fill(50);
	ellipse(cx,cy,radius/4,radius/4);
	
	fill(0);
	text('Author: Alan Zhang (axz2000)', 10, 30);
	textSize(24);
	text('My Clock!', cx, cy);
}
