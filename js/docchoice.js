const DOCCHOICE          = document.getElementById("docchoice");
const WIKI          = document.getElementById("wiki");
const CODOC          = document.getElementById("codoc");
const JLPPCROLE        = document.getElementById("jlppcRole");
const NAVET56ROLE      = document.getElementById("navet56Role");

var textFr = {
    docchoice : "Voulez vous accedez à la documentation du jeu, ou du code source ?",
    wiki : "Wiki d'OpMon (Doc générale)",
    codoc : "Documentation du code source",
    jlppcRole : "Programmation et aide sur le projet",
    navet56Role : "Aide graphique, fan-arts"
}

var textEn = {
    docchoice : "Do you want access to the game's documentation, or to the code documentation?",
    wiki : "General documentation (wiki)",
    codoc : "Code documentation",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
}

var textEs = {
    docchoice : "¿ Wiki o code documentacion ?",
    wiki : "General documentation (wiki)",
    codoc : "Code documentation",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
}

var txtLang = [textFr, textEs, textEn];

function printLang(id){
    var lang = txtLang[id];
    DOCCHOICE.innerHTML = lang.docchoice;
    WIKI.innerHTML = lang.wiki;
    CODOC.innerHTML = lang.codoc;
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
