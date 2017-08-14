const TITLE       = document.getElementById("title");
const LIST        = document.getElementById("list");
const DESCRIPTION = document.getElementById("description");

var parameters = ;

var docId = Number(location.search.substring(1).split("=")[1]);
    

function printDoc(id){
    var file = files[id];
    TITLE.innerHTML = file.title;
    LIST.innerHTML = "<code><ul>";
    for(var i = 1; i < file.length; i++){
	LIST.innerHTML += '<li><a href="#' + file[i].shortName + '">' + file[i].name + '</a></li>';
    }
    LIST.innerHTML += "</ul></code>";
    DESCRIPTION.innerHTML = "";
    for(var i = 1; i < file.length; i++){
	DESCRIPTION += '<h3 id="' + file[i].shortName + '"><code>' + file[i].name + '</h3><p>' + file[i].description + '</p>';
    }
    actuel++;
}

printDoc(docId);
