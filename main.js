async function download(){
	const blob = new Blob(["Info goes here"], {type: "application/octet-stream"});
	const url = window.URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = 'styles.css';
	document.body.appendChild(link);
	link.click();
	window.URL.revokeObjectURL(url);
	document.body.removeChild(link);
}

var medsNum = 0;
var maxMeds = 3;

async function medsNewBox(){
	if (medsNum + 1 >= maxMeds){
		throw "maxMeds";
	}
	++medsNum;
	newMeds = document.createElement("input");
	newMeds.type = "text";
	newMeds.id = `meds${medsNum}`;
	newMeds.name = `meds${medsNum}`;
	
	newNum = document.createElement("input");
	newNum.type = "number";
	newNum.id = `num${medsNum}`;
	newNum.name = `num${medsNum}`;
	newNum.min = "0";
	newNum.addEventListener("change", medsBox);
	
	newMedsLabel = document.createElement("label");
	newMedsLabel.htmlFor = `meds${medsNum}`;
	newMedsLabel.textContent = "Input medicine name: ";
	newMedsLabel.id = `medsLabel${medsNum}`;
	
	newNumLabel = document.createElement("label");
	newNumLabel.htmlFor = `num${medsNum}`;
	newNumLabel.textContent = "Input daily dose: ";
	newNumLabel.id = `numLabel${medsNum}`;
	
	brk0 = document.createElement("br");
	brk0.id = `break${medsNum}.0`;
	
	brk1 = document.createElement("br");
	brk1.id = `break${medsNum}.1`;
	
	document.getElementById(`num${medsNum - 1}`).removeEventListener("change", medsBox);
	
	div = document.getElementById("medsdiv");
	div.appendChild(brk0);
	div.appendChild(newMedsLabel);
	div.appendChild(newMeds);
	div.appendChild(brk1);
	div.appendChild(newNumLabel);
	div.appendChild(newNum);
}

async function medsRemoveBox(){
	meds = document.getElementById(`meds${medsNum}`);
	num = document.getElementById(`num${medsNum}`);
	medsLabel = document.getElementById(`medsLabel${medsNum}`);
	numLabel = document.getElementById(`numLabel${medsNum}`);
	brk0 = document.getElementById(`break${medsNum}.0`);
	brk1 = document.getElementById(`break${medsNum}.1`);
	
	document.getElementById(`num${--medsNum}`).addEventListener("change", medsBox);
	div.removeChild(num);
	div.removeChild(numLabel);
	div.removeChild(brk1);
	div.removeChild(meds);
	div.removeChild(medsLabel);
	div.removeChild(brk0);
}

async function medsBox(event){
	console.log(event.target.value);
	if (event.target.value == "" | event.target.value == 0){
		console.log("rmb");
		medsRemoveBox();
	} else {
		console.log("nb");
		medsNewBox();
	}
}

function main(){
	var btn1 = document.getElementById("btn1");
	btn1.addEventListener("click", download);
	
	// var num0 = document.getElementById("num0");
	// num0.addEventListener("change", medsBox);
}

document.addEventListener('DOMContentLoaded', main);