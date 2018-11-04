function goTo(url){
    location.href=url;
    reload();
}

var version = "0.15.1";
var date = " (04/11/2018)";

function linuxDown(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-Linux.deb");
}
function macDown(){
	alert("Warning : 0.15.1 is not released on MacOS yet. You can download the 0.14 by clicking on \"Other versions\"\nAttention : La 0.15 n'est pas encore sortie sur MacOS. Vous pouvez télécharger la 0.14 en cliquant sur \"Autres versions\"");
    //goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-Mac_" + version + ".dmg");
}
function linuxDownScript(){
    goTo("https://github.com/OpMonTeam/OpMon/releases/download/alpha-v" + version + "/source.sh");
}
