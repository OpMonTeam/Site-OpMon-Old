const TITLE       = document.getElementById("title");
const LIST        = document.getElementById("list");
const DESCRIPTION = document.getElementById("description");

var docId = Number(location.search.substring(1).split("=")[1]);
    

function printDoc(id){
    if(id == NaN){
	id = 0;
    }
    var file = files[id];
    TITLE.innerHTML = file[0];
    LIST.innerHTML = "<code><ul>";
    for(var i = 1; i < file.length; i++){
	LIST.innerHTML += '<li><a href="#' + file[i].shortName + '">' + file[i].name + '</a></li>';
    }
    LIST.innerHTML += "</ul></code>";
    DESCRIPTION.innerHTML = "";
    for(var i = 1; i < file.length; i++){
	DESCRIPTION.innerHTML += '<h3 id="' + file[i].shortName + '"><code>' + file[i].name + '</code></h3><p>' + file[i].description + '</p>';
    }
}

if(docId == NaN){
    docId = 0;
}
printDoc(docId);
