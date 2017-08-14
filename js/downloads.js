function linuxDown(){
    goTo("https://github.com/jlppc/OpMon/releases/download/alpha-v" + version + "/OpMon_" + version  + "-bin.deb");
}

const MENUDOWN         = document.getElementById("menuDown");
const MENUFEATURES     = document.getElementById("menuFeatures");
const MENUABOUT        = document.getElementById("menuAbout");
const MENUTEAM         = document.getElementById("menuTeam");
const MENUCONTACT      = document.getElementById("menuContact");
const MENUDOC          = document.getElementById("menuDoc");
const LANGTITLE        = document.getElementById("langTitle");
const LANGSUBTITLE     = document.getElementById("langSubTitle");
const WINDOWN          = document.getElementById("winDown");
const WINNIDOWN        = document.getElementById("winNIDown");
const MACDOWN          = document.getElementById("macDown");
const DEBDOWN          = document.getElementById("debDown");
const LINDOWN          = document.getElementById("linDown");
const OTHERDOWN        = document.getElementById("otherDown");
const SEEGITHUB        = document.getElementById("seeGithub");
const OTHERSYSTEMS     = document.getElementById("otherSystems");
const REPODOWN         = document.getElementById("repoDown");
const JLPPCROLE        = document.getElementById("jlppcRole");
const NAVET56ROLE      = document.getElementById("navet56Role");

var instructionAlert = "";

function instruction(){
    alert(instructionAlert);
    goTo("https://github.com/jlppc/OpMon/archive/master.zip");
}


var textFr = {
    instruction : "Si vous avez un autre système, vous pouvez très bien compiler le jeu grace au sources, si SFML et G++ sont disponibles pour votre système. Vous pouvez utiliser le projet Codeblocks, le makefile, ou directement compiler a la main.",
    menu : {
	down : "Téléchargements",
	features : "Fonctionnalitées",
	about : "A propos du jeu",
	team : "Le Team OPMon",
	contact : "Contact",
	doc : "Documentation"
    },
    langTitle : "Téléchargement",
    langSubTitle : "Jeu en version Alpha " + version + " (08/08/2017)",
    winDown : "Télécharger pour Windows",
    winNIDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon-Win_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s" id="winNIDown">Télécharger pour Windows (Sans installation)</a>',
    macDown : "Télécharger pour Mac",
    debDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon_' + version + '-bin.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger .deb pour Debian</a>',
    linDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon-Linux_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger pour Linux</a>',
    otherDown : "Autres versions",
    seeGithub : "Voir sur github",
    otherSystems : "Autres systèmes",
    repoDown : "Télécharger le dépot (.zip)",
    jlppcRole : "Programmation et aide sur le projet",
    navet56Role : "Aide graphique, fan-arts"
    
    
    
};

var textEn = {
    menu : {
	down : "Downloads",
	features : "Features",
	about : "About the game",
	team : "The OPMon Team",
	contact : "Contacts",
	doc : "Documentation"
    },
    langTitle : "Download",
    langSubTitle : "Game version : Alpha " + version + " (08/08/2017)",
    winDown : "Download for Windows",
    winNiDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon-Win_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s" id="winNIDown">Download for Windows (Without installation)</a>',
    macDown : "Download for Mac",
    debDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon_' + version + '-bin.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Debian</a>',
    linDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon-Linux_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Linux</a>',
    otherDown : "Other versions",
    seeGithub : "See on Github",
    otherSystems : "Other systems",
    repoDown : "Download the repository (.zip)",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
};

var textEs = {
    menu : {
	down : "Descargas",
	features : "Funcionalidades",
	about : "Acerca del juego",
	team : "El equipo de OpMon",
	contact : "Contacto",
	doc : "Documentación"
    },
    langTitle : "Download",
    langSubTitle : "Game version : Alpha " + version + " (08/08/2017)",
    winDown : "Download for Windows",
    winNiDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon-Win_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s" id="winNIDown">Download for Windows (Without installation)</a>',
    macDown : "Download for Mac",
    debDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon_' + version + '-bin.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Debian</a>',
    linDown : '<a href="https://github.com/jlppc/OpMon/releases/download/alpha-v' + version + '/OpMon-Linux_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Linux</a>',
    otherDown : "Other versions",
    seeGithub : "See on Github",
    otherSystems : "Other systems",
    repoDown : "Download the repository (.zip)",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist"
};

var txtLang = [textFr, textEs, textEn];

function printLang(id){
    var lang = txtLang[id];
    MENUDOWN.innerHTML = lang.menu.down;
    MENUFEATURES.innerHTML = lang.menu.features;
    MENUABOUT.innerHTML = lang.menu.about;
    MENUTEAM.innerHTML = lang.menu.team;
    MENUCONTACT.innerHTML = lang.menu.contact;
    MENUDOC.innerHTML = lang.menu.doc;
    LANGTITLE.innerHTML = lang.langTitle;
    LANGSUBTITLE.innerHTML = lang.langSubTitle;
    WINDOWN.innerHTML = lang.winDown;
    WINNIDOWN.innerHTML = lang.winNIDown;
    MACDOWN.innerHTML = lang.macDown;
    DEBDOWN.innerHTML = lang.debDown;
    LINDOWN.innerHTML = lang.linDown;
    OTHERDOWN.innerHTML = lang.otherDown;
    SEEGITHUB.innerHTML = lang.seeGithub;
    OTHERSYSTEMS.innerHTML = lang.otherSystems;
    REPODOWN.innerHTML = lang.repoDown;
    JLPPCROLE.innerHTML = lang.jlppcRole;
    NAVET56ROLE.innerHTML = lang.navet56Role;
    instructionAlert = lang.inscrution;
    
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

