function goTo(url){
    location.href=url;
    reload();
}

var version = "0.12.1";
var date = "08/08/2017";

function linuxDown(){
    goTo("https://github.com/jlppc/OpMon/releases/download/alpha-v" + version + "/OpMon_" + version  + "-bin.deb");
}
