function goTo(url){
    location.href=url;
    reload();
}

var version = "0.13";
var date = " (05/10/2017)";

function linuxDown(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon_" + version  + "-bin.deb");
}
