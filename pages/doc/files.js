console.log("Loading files...");

var files = new Map();

var nl = '<br/>';

function linkGen(destination, name){
    return '<a href="files.html?=' + destination + '">' + name + '</a>';
}

function primitive(type){
    return '<span style="color: blue;">' + type + '</span>';
}

files.set("AGameScreen", {
    otype : "file",
    id : "",
    name : "AGameScreen.hpp",
    content : [
	{
	    otype : "class",
	    id : "AGameScreen",
	    name : "AGameScreen",
	    documentation : [
		"Interface of all first-level controllers.", nl,
		"A game screen is handled by the GameLoop. When running, two methods are called ",
		linkGen("AGameScreen#AGameScreen_checkEvent", "checkEvent()"),
		" is called for each sf::Event detected, then update() is called once per frame.", nl,
		"In addition, ", linkGen("AGameScreen#AGameScreen_suspend", "suspend()"), " and ",
		linkGen("AGameScreen#AGameScreen_resume", "resume()"), 
		" are called when respectively the controller loose the focus (another controller is added on top) and regain the focus."
	    ],
	    content : [
		{
		    otype : "constructor",
		    name : "AGameScreen",
		    documentation : [
			"The default AGameScreen's constructor."
		    ],
		    id : "AGameScreen_constructor"
		},
		{
		    otype : "method",
		    keywords : ["virtual"],
		    name : "checkEvent",
		    id : "AGameScreen_checkEvent",
		    type : {
				name : "GameStatus",
				id : "GameStatus#GameStatus"
		    },
		    parameters : [
			{
			    type : {
				name : "sf::Event"
			    },
			    mods : [{txt : "const", keyword : true}, {txt : "&", keyword : false}]
			}
		    ],
		    documentation : [
			"Processes a new SFML Input (keyboard, mouse, ...)."
		    ]
		},
		{
		    otype : "method",
		    keywords : ["virtual"],
		    name : "update",
		    id : "AGameScreen_update",
		    purev : true,
		    type : {
				name : "GameStatus",
				id : "GameStatus#GameStatus"
		    },
		    parameters : [
			{
			    type : {
				name : "sf::RenderTexture"
			    },
			    mods : [{txt : "&", keyword : false}]
			}
		    ],
		    documentation : [
			"Update and draw the game.",nl,
			"This method is called once per frame."
		    ]
		},
		{
		    otype : "method",
		    keywords : ["virtual"],
		    name : "suspend",
		    id : "AGameScreen_suspend",
		    type: {
			name : primitive("void")
		    },
		    documentation : [
			"Suspends the current game screen, to put another one above."
		    ]
		},
		{
		    otype : "method",
		    keywords : ["virtual"],
		    name : "resume",
		    id : "AGameScreen_resume",
		    type: {
			name : primitive("void")
		    },
		    documentation : [
			"Resumes the current game screen after being suspended."
		    ]
		},
		{
		    otype : "method",
		    keywords : ["virtual"],
		    name : "loadNextScreen",
		    id : "AGameScreen_loadNextScreen",
		    type: {
			name : primitive("void")
		    },
		    documentation : [
			"Loads the next game screen."
		    ]
		},
		{
		    otype : "method",
		    name : "getNextGameScreen",
		    id : "AGameScreen_getNextGameScreen",
		    type : {
			name : "std::unique_ptr",
			template : {
			    name : "AGameScreen",
			    id : "AGameScreen#AGameScreen"
			}
		    },
		    documentation : [
				"Returns the next game screen. Returns nullptr if the game screen isn't loaded with ",
				linkGen("AGameScreen#AGameScreen_loadNextScreen", "loadNextScreen()")
		    ]
		}
	    ]
	}
    ]
});

files.set("AnimationCtrl", {
    otype : "file",
    id : "",
    name : "AnimationCtrl.hpp",
    content : [
	{
	    otype : "class",
	    id : "AnimationCtrl",
		name : "AnimationCtrl",
	    inherits : linkGen("AGameScreen#AGameScreen", "AGameScreen"),
		documentation : [
			"AnimationCtrl is a special game screen which can call all types of ",
			linkGen("Animations#Animations_Animation", "Animations"),
			"."
		],
		content : [
			{
				otype : "constructor",
				id : "AnimationCtrl_constructor",
				name : "AnimationCtrl",
				parameters : [
					{
						type : {
							name : "std::unique_ptr",
							template : {
								name : "Animations::Animation",
								id : "Animations#Animations_Animation"
							}
						},
						name : "view"
					}
				]
				
			}
		]
	}
    ]
});
