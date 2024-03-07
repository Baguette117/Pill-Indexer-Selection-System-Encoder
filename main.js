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

medsNum = 0;
maxMeds = 3;

async function medsNewBox(){
	console.log("medsNewBox");
	if (medsNum + 1 >= maxMeds){
		throw "maxMeds";
	}

	xbtn = document.getElementById("xbtn");

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
	
	div = document.getElementById("medsdiv");
	div.appendChild(brk0);
	div.appendChild(newMedsLabel);
	div.appendChild(newMeds);
	div.removeChild(xbtn);
	div.appendChild(xbtn);
	div.appendChild(brk1);
	div.appendChild(newNumLabel);
	div.appendChild(newNum);
}

async function medsRemoveBox(){
	console.log("medsRemoveBox");
	if (medsNum == 0){
		throw "minMeds";
	}
	meds = document.getElementById(`meds${medsNum}`);
	num = document.getElementById(`num${medsNum}`);
	medsLabel = document.getElementById(`medsLabel${medsNum}`);
	numLabel = document.getElementById(`numLabel${medsNum}`);
	brk0 = document.getElementById(`break${medsNum}.0`);
	brk1 = document.getElementById(`break${medsNum--}.1`);
	
	div.removeChild(num);
	div.removeChild(numLabel);
	div.removeChild(brk1);
	div.removeChild(meds);
	div.removeChild(medsLabel);
	div.removeChild(brk0);
}