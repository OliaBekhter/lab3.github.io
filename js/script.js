function printSteps(){
	let beginningVal = parseFloat(document.getElementById("beggining").value);
	let endVal = parseFloat(document.getElementById("end").value);
	let stepVal = parseFloat(document.getElementById("step").value);
	let y = 0;
	if(isNaN(beginningVal && endVal && stepVal)){
		console.log("Input number wrong!");
		return false;
	}
	console.log("while:");
	while(beginningVal <= endVal){
		y = Math.sqrt(Math.pow(Math.sin(beginningVal), 2)+1/2);
		console.log("x = " + (beginningVal) + " | y = " + (y));
		beginningVal+=stepVal;
	}
	console.log("do-while:");
	y = 0;
	beginningVal = parseFloat(document.getElementById("beggining").value);
	do{
	  y = Math.sqrt(Math.pow(Math.sin(beginningVal), 2)+1/2);
	  console.log("x = " + (beginningVal) + " | y = " + (y));
	  beginningVal+=stepVal;
	}
	while (beginningVal <= endVal)
	console.log("for:");
	y = 0;
	for (beginningVal = parseFloat(document.getElementById("beggining").value); beginningVal <= endVal; beginningVal+=stepVal) {
	  y = Math.sqrt(Math.pow(Math.sin(beginningVal), 2)+1/2);
	  console.log("x = " + (beginningVal) + " | y = " + (y));
	}
	return false;
}
   
function draw() {
	let canvas = document.getElementById('canvas');
	let ctx = canvas.getContext('2d');
	canvas.width = 500;
	canvas.height = 500;
	ctx.fillStyle = "antiquewhite";
	ctx.beginPath();
	console.log("canvas (in 500X zoom):");
	let y = 0;
	for (let x = 0; x <= 0.2; x+=0.025) {
		y = Math.sqrt(Math.pow(Math.sin(x), 2)+1/2);
		ctx.lineTo( x*500,  y*500);
		console.log("x = " + (x*500) + " | y = " + (y*500));
	}
	ctx.stroke();
}