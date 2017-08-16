const TITLE       = document.getElementById("title");
const LIST        = document.getElementById("list");
const DESCRIPTION = document.getElementById("description");

var docId = Number(location.search.substring(1).split("=")[1]);

function writeInList(tab){
    var titleStr = "";
    for(var i = 0; i < tab.length; i++){
	titleStr += ('<li><a href="#' + tab[i].shortName + '">' + tab[i].name + '</a>');
	if(tab[i].elements){
	    titleStr += "<ul>";
	    titleStr += writeInList(tab[i].elements);
	    titleStr += "</ul>";
	}
	titleStr += '</li>';
    }
    return titleStr;
}

function writeInDesc(tab){
    var descStr = "";
    for(var i = 0; i < tab.length; i++){
	descStr += '<li><span class="likeH" id="' + tab[i].shortName + '"><code>' + tab[i].name + '</code></span><p>' + tab[i].description + '</p></li>';
	if(tab[i].elements){
	    descStr += "<ul>";
	    descStr += writeInDesc(tab[i].elements);
	    descStr += '</ul>'
	}
    }
    return descStr;
}

function printDoc(id){
    if(id == NaN){
	id = 0;
    }
    var file = files[id];
    
    TITLE.innerHTML = fnames[id];
    var titleStr = "";
    var descStr = "";
    titleStr = "<code><ul>";

    titleStr += writeInList(file);

    titleStr += "</ul></code>";
    LIST.innerHTML = titleStr;

    descStr += writeInDesc(file);
    
    DESCRIPTION.innerHTML = descStr;
}

if(docId == NaN){
    docId = 0;
}
printDoc(docId);
