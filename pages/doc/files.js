console.log("Loading files...");

var files = new Map();

var nl = '<br/>';

function linkGen(destination, name){
	return '<a href="files.html?=' + destination + '">' + name + '</a>';
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
				id : "GameStatus_GameStatus"
			},
			parameters : [
			{
				type : {
					name : "sf::Event"
				},
				mods : [{txt : "const", keyword : true}, {txt : "&", keyword : false}],
				name : "event"
			}
			]
		}
		]
	}
	]
});