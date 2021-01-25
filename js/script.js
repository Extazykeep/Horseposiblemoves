//making main div that contains field
let field = document.createElement("div");
field.classList.add("field");
document.body.appendChild(field);
// fill our board with cells
for(let i = 0; i < 64; i++) {
	let cell = document.createElement("div");
	field.appendChild(cell);
	cell.classList.add("cell");
};
// colorize cells and set they coords
let cell = document.getElementsByClassName("cell");
let x=1, y=1;
for(i = 0; i < cell.length; i++) {
	if(x>8){
		x = 1;
		y++
	}	
	cell[i].setAttribute("x", x);
	cell[i].setAttribute("y", y);
	x++;
	if(( (x+y)% 2 ===0)) {
		cell[i].classList.add("black-cell");
	}
};
// handling mouse coords
field.addEventListener("click", event=>{
	let el = event.target;
	let elX = el.getAttribute("x");
	let elY = el.getAttribute("y");
	document.querySelectorAll('.cell.active').forEach(e=>e.classList.remove('active'));
	if(el.classList.contains("cell")) {
		el.classList.add("active");
	}	
	horsepos(elX,elY);
});
// check possible moves 
function horsepos(xpos,ypos) {	
	document.querySelectorAll('.cell.horse').forEach(e=>e.classList.remove('horse'));
	let x = +xpos;
	let y = +ypos;	
	const moves = [[x+2,y+1],[x+2,y-1],[x-2,y+1],[x-2,y-1],[x+1,y+2],[x-1,y+2],[x+1,y-2],[x-1,y-2]];	
	for(let i=0; i < moves.length; i++) {
		if((moves[i][0]) <= 8 && (moves[i][1] <= 8) && (moves[i][0]) > 0 && (moves[i][1] > 0)) {									
			document.querySelector(`.cell[x="${moves[i][0]}"][y="${moves[i][1]}"]`).classList.add('horse');			
		}		
	}	
};
