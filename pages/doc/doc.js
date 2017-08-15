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
    var titleStr = "";
    var descStr = "";
    titleStr = "<code><ul>";
    
    for(var i = 1; i < file.length; i++){
	titleStr += ('<li><a href="#' + file[i].shortName + '">' + file[i].name + '</a>');
	if(file[i].elements){
	    titleStr += "<ul>";
	    for(var j = 0; j < file[i].elements.length; j++){
		titleStr += ('<li><a href="#' + file[i].shortName + '-' + file[i].elements[j].shortName + '">' + file[i].elements[j].name + '</a></li>');
	    }
	   titleStr += "</ul>";
	}
	titleStr += '</li>';
    }
    titleStr += "</ul></code>";
    LIST.innerHTML = titleStr;
    
    for(var i = 1; i < file.length; i++){
	descStr += '<h3 id="' + file[i].shortName + '"><code>' + file[i].name + '</code></h3><p>' + file[i].description + '</p>';
	if(file[i].elements){
	    descStr += "<ul>";
	    for(var j = 0; j < file[i].elements.length; j++){
		descStr += '<li id="' + file[i].shortName + '-' + file[i].elements[j].shortName + '"><span class="likeH"><code>' + file[i].elements[j].name + '</code></span><p>' + file[i].elements[j].description + '</p></li>';
	    }
	   descStr += '</ul>'
	}
    }
    DESCRIPTION.innerHTML = descStr;
}

if(docId == NaN){
    docId = 0;
}
printDoc(docId);
