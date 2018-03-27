function linuxDownOld(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-sfml2.3.deb");
}
function linuxDown(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-" + version  + "-sfml2.4.deb");
}
function macDown(){
    goTo("https://github.com/cyrioncentori/OpMon/releases/download/alpha-v" + version + "/OpMon-Mac_" + version + ".dmg");
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
const UNSTABLEDOWN     = document.getElementById("unstableDown");
const WINNIDOWN        = document.getElementById("winNIDown");
const MACDOWN          = document.getElementById("macDown");
const DEBDOWN          = document.getElementById("debDown");
const DEBDOWN2         = document.getElementById("debDown2");
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
    goTo("https://github.com/cyrioncentori/OpMon/archive/master.zip");
}

var textFr = {
    instruction : "Si vous avez un autre système, vous pouvez très bien compiler le jeu grace au sources, si SFML, gcc et cmake sont disponibles pour votre système.",
    macDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Mac_' + version + '.dmg"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger pour macOS</a>',
    menu : {
	down : "Téléchargements",
	features : "Fonctionnalitées",
	about : "A propos du jeu",
	team : "Le Team OPMon",
	contact : "Contact",
	doc : "Documentation"
    },
    langTitle : "Téléchargements",
    langSubTitle : "Jeu en version Alpha " + version + date,
    winDown : "Télécharger pour Windows",
    winNIDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Win_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s" id="winNIDown">Télécharger pour Windows (Sans installation)</a>',
    macDown : '<a href="javascript:macDown();" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger pour macOS</a>',
    debDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-' + version + '-sfml2.4.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger .deb pour Debian & Ubuntu >= 16.10</a>',
    debDown2 : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-' + version + '-sfml2.3.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger .deb pour Mint & Ubuntu < 16.10</a>',
    linDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Linux_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Télécharger pour Linux</a>',
    otherDown : "Autres versions",
    seeGithub : "Voir sur github",
    otherSystems : "Autres systèmes",
    repoDown : "Télécharger le dépot (.zip)",
    jlppcRole : "Programmation et aide sur le projet",
    navet56Role : "Aide graphique, fan-arts",
    unstableDown : "Télécharger OpMon instable"
    
    
};

var textEn = {
    instruction : "If you have an another system, you can build the game with the source files, if sfml, cmake and gcc are avilable for your system.",
    macDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Mac_' + version + '.dmg"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Download for macOS</a>',
    menu : {
	down : "Downloads",
	features : "Features",
	about : "About the game",
	team : "The OPMon Team",
	contact : "Contacts",
	doc : "Documentation"
    },
    langTitle : "Downloads",
    langSubTitle : "Game version : Alpha " + version + date,
    winDown : "Download for Windows",
    winNIDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Win_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s" id="winNIDown">Download for Windows (Without installation)</a>',
    macDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Mac_' + version + '.dmg"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Download for macOS</a>',
    debDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-' + version + '-sfml2.4.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Debian & Ubuntu >= 16.10 </a>',
    debDown2 : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-' + version + '-sfml2.3.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Mint & Ubuntu < 16.10</a>',
    linDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Linux_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Linux</a>',
    otherDown : "Other versions",
    seeGithub : "See on Github",
    otherSystems : "Other systems",
    repoDown : "Download the repository (.zip)",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist",
    unstableDown : "Download OpMon unstable"
};

var textEs = {
        instruction : "If you have an another system, you can build the game with the source files, if sfml, cmake and gcc are avilable for your system.",
    macDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Mac_' + version + '.dmg"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Download for macOS</a>',
    menu : {
	down : "Descargas",
	features : "Funcionalidades",
	about : "Acerca del juego",
	team : "El equipo de OpMon",
	contact : "Contacto",
	doc : "Documentación"
    },
    langTitle : "Descargas",
    langSubTitle : "Version del juego : Alpha " + version + date,
    winDown : "Download for Windows",
    winNIDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Win_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s" id="winNIDown">Download for Windows (Without installation)</a>',
    macDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Mac_' + version + '.dmg"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s"> Download for macOS</a>',
    debDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-' + version + '-sfml2.4.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Debian & Ubuntu >= 16.10</a>',
    debDown2 : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-' + version + '-sfml2.3.deb"  class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Mint & Ubuntu < 16.10</a>',
    linDown : '<a href="https://github.com/cyrioncentori/OpMon/releases/download/alpha-v' + version + '/OpMon-Linux_NoInstall.zip" class="wow fadeInUp btn btn-default hvr-bounce-to-top smoothScroll" data-wow-delay="1.3s">Download for Linux</a>',
    otherDown : "Other versions",
    seeGithub : "See on Github",
    otherSystems : "Other systems",
    repoDown : "Download the repository (.zip)",
    jlppcRole : "Programmation and questions about the project",
    navet56Role : "Game-designer and graphist",
    unstableDown : "Descargar OpMon unstable"
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
    DEBDOWN2.innerHTML = lang.debDown2;
    LINDOWN.innerHTML = lang.linDown;
    UNSTABLEDOWN.innerHTML = lang.unstableDown;
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

