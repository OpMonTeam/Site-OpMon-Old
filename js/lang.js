const LANGTITLE        = document.getElementById("langTitle");
const LANGDESC         = document.getElementById("langDesc");
const LANGDOWNTITLE    = document.getElementById("langDownTitle");
const MENUDOWN         = document.getElementById("menuDown");
const MENUFEATURES     = document.getElementById("menuFeatures");
const MENUABOUT        = document.getElementById("menuAbout");
const MENUTEAM         = document.getElementById("menuTeam");
const MENUCONTACT      = document.getElementById("menuContact");
const MENUDOC          = document.getElementById("menuDoc");
const LANGDOWN         = document.getElementById("langDown");
const LANGGAMEVERS     = document.getElementById("langGameVers");
const LANGDOWNWIN      = document.getElementById("langDownWin");
const LANGDOWNMAC      = document.getElementById("langDownMac");
const LANGDOWNLIN      = document.getElementById("langDownLin");
const LANGODOWN        = document.getElementById("langODown");
const LANGOSDOWN       = document.getElementById("langOSDown");
const LANGALLDOWN      = document.getElementById("langAllDown");
const FEATURESTITLE    = document.getElementById("featuresTitle");
const FEATURESSUBTITLE = document.getElementById("featuresSubTitle");
const FEATURE1T        = document.getElementById("feature1T");
const FEATURE1         = document.getElementById("feature1");
const FEATURE2T        = document.getElementById("feature2T");
const FEATURE2         = document.getElementById("feature2");
const FEATURE3T        = document.getElementById("feature3T");
const FEATURE3         = document.getElementById("feature3");
const ABOUTTITLE       = document.getElementById("aboutTitle");
const ABOUTTEXT        = document.getElementById("aboutText");
const NEWS             = document.getElementById("news");
const DEMOTITLE        = document.getElementById("demoTitle");
const DEMOTEXT         = document.getElementById("demoText");
const GOTOYOUTUBE      = document.getElemen tById("goToYoutube");
const TEAMTITLE        = document.getElementById("teamTitle");
const TEAMSUBTITLE     = document.getElementById("teamSubTitle");
const JLPPCDESC        = document.getElementById("jlppcDesc");
const NAVET56DESC      = document.getElementById("navet56Desc");
const AERZIADESC       = document.getElementById("aerziaDesc");



function goTo(url){
    location.href=url;
    reload();
}

var version = "0.12.1";

function linuxDown(){
    goTo("https://github.com/jlppc/OpMon/releases/download/alpha-v" + version + "/OpMon_" + version  + "-bin.deb");
}

var textFr = {
    langTitle : "Le jeu inspiré de Pokémon !",
    langDesc : "Prenez place dans cette aventure faites de monstres et d'explorations, dans la jolie region de Regimys !",
    langDownTitle : "Télécharger le jeu",
    menu : {
	down : "Téléchargements",
	features : "Fonctionnalitées",
	about : "A propos du jeu",
	team : "Le Team OPMon",
	contact : "Contact",
	doc : "Documentation"
    },
    langDown : "Téléchargement",
    langGameVers : "Jeu version Alpha " + version,
    langDownWin : "Télécharger pour Windows",
    langDownMac : "Télécharger pour Mac",
    langDownLin : "Télécharger pour Linux",
    langODown : "Autres téléchargements",
    langOSDown : "Toutes plateformes",
    langAllDown : "Voir tous les téléchargements",

    featuresTitle : "Des nouveautés attendues depuis longtemps",
    featuresSubTitle : "par les fans des jeux Pokemons",
    feature1T : "Développé par une équipe volontaire",
    feature1 : "OpMon est développé par une équipe formée a 100% de bénévoles! Nous ne demandons rien Ã  part votre bonheur!",
    feature2T : "Un jeu open-source",
    feature2 : "OpMon est un jeu totalement open source, et nous utilisons mÃªme des logiciels open sources pour le créer: Linux, Code::blocks, Gimp, Git ect...",
    feature3T : "Fait par des fans, pour des fans",
    feature3 : "Le jeu regeorge(ra) de petits Easters Eggs et clins d'oeils Ã  l'univers de Nintendo et médiavisuel tout en ajoutant des nouveautés qui redonnent un vent de fraicheur Ã  la license.",
    aboutTitle : "Jeu totalement gratuit et libre de droit",
    aboutText : "Le jeu a été imaginé en 2012 et concrétisé en 2016 par une toute petite équipe de fans, le jeu est libre, le code source est ouvert à tous, vous pouvez donc venir nous aider et améliorer le jeu.",
    news : "<h2>Les news du jeu</h2><p>Voici les dernières infos sur le développement du jeu!</p><ul><li>19/07/17 - Le developpement se met en pause jusqu'a debut aout, bonnes vacances !</li><li>15/07/17 - La version Alpha 0.12 stable est sortie!</li><li>28/06/17 - La version Alpha 0.11 stable est sortie!</li><li>31/05/17 - La version Alpha 0.1 stable est sortie !</li><li>29/05/17 - Le jeu a changé de moteur graphique et est passsé a SFML</li><li>02/05/17 - Un nouveau Bilan Mensuel est sorti! </li><li>22/04/17 - Une nouvelle version de developpement est sortie!</li><li>28/03/17 - La version 0.09 est sortie!!!</li><li>22/03/17 - Le site a une toute nouvelle interface! </li><li>21/03/17 - Le systeme de sauvegarde est terminé! Le début du travail sur la ville de départ commence!</li></ul>",
    demoTitle : "Démo d'OPMon",
    demoText : "Voici une brève presentation en action du jeu, c'est la ville de départ du personnage principal. Une demo sortira a chaques grosses nouvelles version (0.1, 0.2, 0.3 etc.. jusqu'a la version 1.0)",
    goToYoutube : "Accéder à la page YouTube :",
    teamTitle : "L'équipe de developpement du jeu",
    teamSubTitle : "(Sans compter les contributeurs occasionels, que vous retrouverez sur Github)",
    jlppcDesc : "Créateur, initiateur du projet et programmeur du jeu",
    navet56Desc : "Co-Créateur, game-designer et graphiste du jeu",
    aerziaDesc : "Collaborateur principal, aide à la programmation et à l'innovation",
    
    
    
    
    
    
    
};

var textEn = {
    langTitle : "The game inspred by pokémon.",
    langDesc : "Prenez place dans cette aventure faites de monstres et d'explorations, dans la jolie region de Regimys !",
    langDownTitle : "Télécharger le jeu",
    menu : {
	down : "Téléchargements",
	features : "Fonctionnalitées",
	about : "A propos du jeu",
	team : "Le Team OPMon",
	contact : "Contact",
	doc : "Documentation"
    }
    
};

var textEs = {
    
};
 
var txtLang = [textFr, textEs, textEn];

function printLang(id){
    var lang = txtLang[id];
    LANGTITLE.innerHTML = lang.langTitle;
    LANGDESC.innerHTML = lang.langDesc;
    LANGDOWNTITLE.innerHTML = lang.langDownTitle;
    MENUDOWN.innerHTML = lang.menu.down;
    MENUFEATURES.innerHTML = lang.menu.features;
    MENUABOUT.innerHTML = lang.menu.about;
    MENUTEAM.innerHTML = lang.menu.team;
    MENUCONTACT.innerHTML = lang.menu.contact;
    MENUDOC.innerHTML = lang.menu.doc;
    LANGDOWN.innerHTML = lang.langDown;
    LANGGAMEVERS.innerHTML = lang.langGameVers;
    LANGDOWNWIN.innerHTML = lang.langDownWin;
    LANGDOWNMAC.innerHTML = lang.langDownMac;
    LANGDOWNLIN.innerHTML = lang.langDownLin;
    LANGODOWN.innerHTML = lang.langODown;
    LANGOSDOWN.innerHTML = lang.langOSDown;
    LANGALLDOWN.innerHTML = lang.langAllDown;
    FEATURESTITLE.innerHTML = lang.featuresTitle;
    FEATURESSUBTITLE.innerHTML = lang.featuresSubTitle;
    FEATURE1T.innerHTML = lang.feature1T;
    FEATURE1.innerHTML = lang.feature1;
    FEATURE2T.innerHTML = lang.feature2T;
    FEATURE2.innerHTML = lang.feature2;
    FEATURE3T.innerHTML = lang.feature3T;
    FEATURE3.innerHTML = lang.feature3;
    ABOUTTITLE.innerHTML = lang.aboutTitle;
    ABOUTTEXT.innerHTML = lang.aboutText;
    NEWS.innerHTML = lang.news;
    DEMOTITLE.innerHTML = lang.demoTitle;
    DEMOTEXT.innerHTML = lang.demoText;
    GOTOYOUTUBE.innerHTML = lang.goToYoutube;
    ABOUTTITLE.innerHTML = lang.aboutTitle;
    ABOUTSUBTITLE.innerHTML = lang.aboutSubTitle;
    JLPPCDESC.innerHTML = lang.jlppcDesc;
    NAVET56DESC.innerHTML = lang.navet56Desc;
    AERZIADESC.innerHTML = lang.aerziaDesc;
    
    
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

