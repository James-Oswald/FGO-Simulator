

let waifus = null;
let rolled = null;
let rarityClasses = [[], [], [], [], []];
let obtained = [];

function onFetch(data){
	waifus = data;
	for(let i = 0; i < waifus.length; i++)
		rarityClasses[waifus[i]["rarity"] - 1].push(waifus[i]);
}

fetch("res/fgo.json").then(r => r.json()).then(d => onFetch(d));

function roll(){
	if(waifus == null){
		alert("Please Wait a moment before rolling waifus.")
		return;
	}
	let list = null;
	let roll = Math.floor(Math.random() * 100) + 1;
	if(roll == 1)
		list = rarityClasses[4];
	else if(roll >= 2 && roll <= 5)
		list = rarityClasses[3];
	else if(roll >= 6 && roll <= 25)
		list = rarityClasses[2];
	else if(roll >= 26 && roll <= 55)
		list = rarityClasses[1];
	else
		list = rarityClasses[0];
	rolled = list[Math.floor(Math.random() * list.length)];
	obtained.push(rolled);
	updateDisplay();
}

function clearRolls(){
	rolled = null;
	obtained = [];
	obHTML = "";
	updateDisplay();
}

let obHTML = "";
function updateDisplay(){
	if(rolled != null){
		//let stars = "★";
		let stars = "★".repeat(rolled["rarity"]);
		//stars = stars.repeat(rolled["rarity"]);
		document.getElementById("lRoll").innerHTML = stars + " " + rolled["name"];
		document.getElementById("lRollImg").src = rolled["img1"];
		obHTML += "<div class=\"il r" + rolled["rarity"] + "\">";
		obHTML += "<p class=\"obtRoll\">" + stars + " " + rolled["name"] + "</p>";
		obHTML += "<img class=\"obtRollImg\" alt=\"\" src=\"" + rolled["img1"] + "\"/>"
		obHTML += "</div>";
	}else{
		document.getElementById("lRoll").innerHTML = "Click Roll to roll";
		document.getElementById("lRollImg").src = "res/meme.gif";
	}
	/*for(let i = 0; i < obtained.length; i++){
		obHTML += "<div class=\"il r" + obtained[i]["rarity"] + "\">";
		let stars = "★".repeat(obtained[i]["rarity"]);
		obHTML += "<p class=\"obtRoll\">" + stars + " " + obtained[i]["name"] + "</p>";
		obHTML += "<img class=\"obtRollImg\" alt=\"\" src=\"" + obtained[i]["img1"] + "\"/>"
		obHTML += "</div>";
	}*/
	document.getElementById("obt").innerHTML = obHTML;
}
