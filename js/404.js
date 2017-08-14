const NOWHERE          = document.getElementById("nowhere");
const REALITY          = document.getElementById("reality");
const INFO404          = document.getElementById("info404");
const JLPPCROLE        = document.getElementById("jlppcRole");
const NAVET56ROLE      = document.getElementById("navet56Role");

var textFr = {
    nowhere : "Vous n'êtes nulle part.",
    reality : "Retour a la réalité.",
    info404 : "Tout ce que vous avez toujours voulu savoir sur 404.",
    jlppcRole : "Programmation et aide sur le projet",
    navet56Role : "Aide graphique, fan-arts"
}

var textEn = {
    nowhere : "You are nowhere.",
    reality : "Return to the reality.",
    info404 : "All you always wanted to know on 404.",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
}

var textEs = {
    nowhere : "You are nowhere.",
    reality : "Return to the reality.",
    info404 : "All you always wanted to know on 404.",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
}

var txtLang = [textFr, textEs, textEn];

function printLang(id){
    var lang = txtLang[id];
    NOWHERE.innerHTML = lang.nowhere;
    REALITY.innerHTML = lang.reality;
    INFO404.innerHTML = lang.info404;
    JLPPCROLE.innerHTML = lang.jlppcRole;
    NAVET56ROLE.innerHTML = lang.navet56Role;
}

if (navigator.browserLanguage)
    var language = navigator.browserLanguage;
else
    var language = navigator.language;
console.log("Language : " + language);
if(language.indexOf('fr') > -1)
    printLang(0);
else if(language.indexOf('es') > -1)
    printLang(1);
else
    printLang(2);
