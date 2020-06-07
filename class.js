
function getUrlParam(param){
    let params = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
        params[key] = value;
    });
    return params[param];
}

function propagate(){
	let name = getUrlParam("c");
	fetch("./classes/" + name + ".json", {credentials: 'same-origin'})
	.then(r => r.json())
	.then(d => propcont(d));
}

let globdata;
function propcont(data){
	globdata = data;
	document.getElementById("className").innerHTML = data["className"];
	document.getElementById("rightimg").src = data["rightimg"];
	document.getElementById("leftimg").src = data["leftimg"];
	document.getElementById("leftimg").src = data["leftimg"];
	document.getElementById("classDescription").innerHTML = data["classDescription"];
	let propString = "<ul>";
	for(let i = 0; i < data["classProperties"].length; i++){
		propString += "<li>" + data["classProperties"][i];
	}
	propString += "</ul>"
	document.getElementById("classProp").innerHTML = propString;
}