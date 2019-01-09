const TITLE       = document.getElementById("title");
const LIST        = document.getElementById("list");
const DESCRIPTION = document.getElementById("description");

var docId = location.search.substring(1).split("=")[1];

var depth = 0;

function writeInList(tab){
    depth++;
    var titleStr = "";
    for(var i = 0; i < tab.length; i++){
	titleStr += ('<li><a href="#d' + depth + tab[i].shortName + '">' + tab[i].name[0] + '</a>');
	if(tab[i].elements){
	    titleStr += "<ul>";
	    titleStr += writeInList(tab[i].elements);
	    titleStr += "</ul>";
	}
	titleStr += '</li>';
    }
    depth--;
    return titleStr;
}



function writeInDesc(tab){
    depth++;
    var descStr = "";
    for(var i = 0; i < tab.length; i++){
	descStr += '<li><span class="likeH" id="d' + depth + tab[i].shortName + '"><code>' + ((tab[i].name.length == 1) ? tab[i].name[0] : tab[i].name[1]) + '</code></span>' + (tab[i].inherited ? '<br/>Inherited from <code>' + tab[i].inherited + '</code><br/>' : "") + (tab[i].derived ? '<br/>Derived from <code>' + tab[i].derived + '</code><br/>' : "") + '<p>' + tab[i].description + '</p></li>';
	if(tab[i].elements){
	    descStr += "<ul>";
	    descStr += writeInDesc(tab[i].elements);
	    descStr += '</ul>'
	}
    }
    depth--;
    return descStr;
}

function printDoc(id){
    
    if(files.get(id) != undefined){
	var file = files.get(id)[0];
	TITLE.innerHTML = files.get(id)[1];
	var titleStr = "";
	var descStr = "";
	titleStr = "<code><ul>";

	titleStr += writeInList(file);
	
	titleStr += "</ul></code>";
	LIST.innerHTML = titleStr;
	
	descStr += writeInDesc(file);
	
	DESCRIPTION.innerHTML = descStr;
    }else{
	titleStr = "Unknown page ! Sorry.";
	LIST.innerHTML = titleStr;
    }
}

printDoc(docId);
