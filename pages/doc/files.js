var AGameScreen = [{
	name : "class AGameScreen",
	shortName : "AGameScreen",
	description : "Interface of all first-level controllers. <br/>A game screen is handled by the GameLoop.<br/>When running, two methods are called: processEvent() is called for each sf::Event detected, then update() is called once per frame.<br/>In addition, suspend() and resume() are called when respectively the controller loose the focus (another controller is added on top) and regain the focus.",
	elements: [
	{
		name : "AGameScreen()",
		shortName : "ctorAGameScreen",
		description : "AGameScreen's constructor"
	},
	{
		name : "virtual GameStatus checkEvent(sf::Event const&)",
		shortName : "checkEvent",
		description : "Process a new SFML input (keyboard, mouse, ...).",
	},
	{
		name : "AGameScreen *getNextGameScreen()",
		shortName : "getNextGameScreen",
		description : "Returns the next game screen that must be printed after this one. When the method checkEvent will return GameStatus::NEXT, this method will be called to get the next game screen."
	},
	{
		name : "virtual void resume()",
		shortName : "resume",
		description : "Resume the game screen"
	},
	{
		name : "virtual void suspend()",
		shortName : "suspend",
		description : "Suspend the game screen"
	},
	{
		name : "virtual GameStatus update() = 0",
		shortName : "update",
		description : "Update and draw the game. This method is called once per frame."
	}
	]
}];

var AnimationCtrl = [{
	name : "class AnimationCtrl : public AGameScreen",
	shortName : "AnimationCtrl",
	description : "Game screen containing an animation.",
	elements: [
	{
		name : "AnimationCtrl(View::Animations::Animation* view)",
		shortName : "ctorAnimationCtrl",
		description : "You must give the animation as a paramter to the controller. This will define what animation the controller plays"
	},
	{
		name : "GameStatus update() override",
		shortName : "update",
		description : "See AGameScreen::update for more information about this method. Returns GameStatus::PREVIOUS when the animation is done."
	}
	]
}];

var EventsCtrl = [{
	name : "namespace EventsCtrl",
	shortName : "EventsCtrl",
	description : "Namespace containing the functions to update the events",
	elements : [
	{
		name : "void actionEvents(std::vector<Model::Event*>& events, Model::Player& player, Model::Events::EventTrigger toTrigger, View::Overworld& overworld)",
		shortName : "actionEvents",
		description : "Checks if the events can be activated, and calls the action method of Event. Function called by checkAction."
	},
	{
		name : "void checkAction(sf::Event const& event, Model::Player& player, View::Overworld& overworld)",
		shortName : "checkAction",
		description : "Checks if an event must be actioned and calls actionEvent."
		
	},
	{
		name : "void updateEvents(std::vector<Model::Event*>& events, Model::Player& player, View::Overworld& overworld)",
		shortName : "updateEvents",
		description : "Calls the \"update\" method for all the events given in parameter."
	}

	]
}];

var MainMenuCtrl = [{
    name : "class MainMenuCtrl : public AGameScreen",
    shortName : "MainMenuCtrl",
    description : "Main Menu's controller.",
    elements : [
	{
	    name : "MainMenuCtrl()",
	    shortName : "ctorMainMenuCtrl",
	    description : "The constructor"
	},
	{
	    name : "GameStatus checkEvent(sf::Event const& event) override",
	    shortName : "checkEvent",
	    description : "See AGameScreen::checkEvent"
	},
	{
	    name : "void resume() override",
	    shortName : "resume",
	    description : "See AGameScreen::resume"
	},
	{
	    name : "void suspend() override",
	    shortName : "suspend",
	    description : "See AGameScreen::suspend"
	},
	{
	    name : "GameStatus update() override",
	    shortName : "update",
	    description : "See AGameScreen::update"
	}
    ]
}];

var OptionsMenuCtrl = [{
    name : "class OptionsMenuCtrl : public AGameScreen",
    shortName : "OptionsMenuCtrl",
    description : "Options Menu's controller.",
    elements : [
	{
	    name : "OptionsMenuCtrl()",
	    shortName : "ctorOptionsMenuCtrl",
	    description : "The constructor"
	},
	{
	    name : "GameStatus checkEvent(sf::Event const& event) override",
	    shortName : "checkEvent",
	    description : "See AGameScreen::checkEvent"
	},
	{
	    name : "void resume() override",
	    shortName : "resume",
	    description : "See AGameScreen::resume"
	},
	{
	    name : "void suspend() override",
	    shortName : "suspend",
	    description : "See AGameScreen::suspend"
	},
	{
	    name : "GameStatus update() override",
	    shortName : "update",
	    description : "See AGameScreen::update"
	}
    ]
}];

var OverworldCtrl = [{
    name : "class OverworldCtrl : public AGameScreen",
    shortName : "OverworldCtrl",
    description : "The Overworld game screen",
    elements : [
	{
	    name : "OverworldCtrl(Model::Player &player)",
	    shortName : "ctorOverworldCtrl",
	    description : "The OverworldCtrl controller needs a reference to the Player, used to move, get it coordinates or check the events."
	},
	{
	    name : "GameStatus checkEvent(sf::Event const &event) override",
	    shortName : "checkEvent",
	    description : "See AGameScreen::checkEvent"
	},
	{
	    name : "GameStatus checkEventsDialog(sf::Event const& events, View::Overworld& overworld)",
	    shortName : "checkEventsDialog",
	    description : "Method called by checkEvent if there is a dialog in Overworld."
	},
	{
	    name : "GameStatus checkEventsNoDialog(sf::Event const& events, View::Overworld& overworld)",
	    shortName : "checkEventsNoDialog",
	    description : "Method called by checkEvent if there is not a dialog in Overworld."
	},
	{
	    name : "GameStatus update() override",
	    shortName : "update",
	    description : "See AGameScreen::update"
	}
    ]
}];

var PlayerCtrl = [{
    name : "namespace PlayerCtrl",
    shortName : "PlayerCtrl",
    description : "Namespace containing the functions used to interact with the Player",
    elements : [
	{
	    name : "void checkMove(Model::Player& player, sf::Event const& events, View::Overworld & overworld)",
	    shortName : "checkMove",
	    description : "Checks the SFML events and move the player if the key to move is pressed. To move, this functions calls PlayerCtrl::move() and not player.getPosition().move()."
	},
	{
	    name : "void move(Model::Side direction, Model::Player& player, View::Overworld& overworld)",
	    shortName : "move",
	    description : "Moves the player and active the events with the EventTrigger GO_IN."
	}
    ]
}];

var StartSceneCtrl = [{
    name : "class StartSceneCtrl : public AGameScreen",
    shortName : "StartSceneCtrl",
    description : "The StartScene game screen",
    elements : [
	{
	    name : "StartSceneCtrl()",
	    shortName : "ctorStartSceneCtrl",
	    description : "StartSceneCtrl's constructor."
	},
	{
	    name : "GameStatus checkEvent(sf::Event const& event) override",
	    shortName : "checkEvent",
	    description : "See AGameScreen::checkEvent"
	},
	{
	    name : "void resume() override",
	    shortName : "resume",
	    description : "See AGameScreen::resume"
	},
	{
	    name : "void suspend() override",
	    shortName : "suspend",
	    description : "See AGameScreen::suspend"
	},
	{
	    name : "GameStatus update() override",
	    shortName : "update",
	    description : "See AGameScreen::update"
	}
	
    ]
}];


var Attack = [{
    name : "class Attack",
    shortName : "Attack",
    description : "Pure virtual class defining an attack. To create an attack, you must create a class inherited of Attack and fill the constructor. You can redefine the virtual methods.",
    elements : [
	{
	    name : "Attack(std::string name, int power, Type type, int accuracy, bool special, bool status, int criticalRate, bool neverFails, int ppMax, int priority, std::string className)",
	    shortName : "ctorAttack",
	    description : "Attack's constructor. Ask for all the attack's informations to create the attack."
	},
	{
		name : "int attack(OpMon &atk, OpMon &def)",
		shortName : "attack",
		description : "Method executing the attack, where atk is the attack's laucher, and def is the OpMon receiving the attack."
	},
	{
	    name : "virtual int effectAfter(OpMon & atk, OpMon & def)",
	    shortName : "effectAfter",
	    description : "Method called after the damages calculation. \"atk\" is the offensive OpMon, \"def\" is the defensive."
	},
	{
	    name : "virtual int effectBefore(OpMon &atk, OpMon & def)",
	    shortName : "effectBefore",
	    description : "Method called before the damages calculation. \"atk\" is the offensive OpMon, \"def\" is the defensive."
	},
	{
		name : "virtual std::string getClassName()",
		shortName : "getClassName",
		description : "Returns the class name (Used in Attacks::newAttack)."
	},
	{
		name : "Type getType()",
		shortName : "getType()",
		description : "Returns the attack's type"
	},
	{
		name : "void healPP()",
		shortName : "healPP",
		description : "Sets pp to the ppMax's value."
	},
	{
		name : "virtual void ifFails(OpMon &atk, OpMon &def)",
		shortName : "ifFails",
		description : "Method called if the attack fails."
	},
	{
		name : "virtual std::string save()",
		shortName : "save",
		description : "Returns the string representation of the object, to be saved in a file."
	},
	{
		name : "void setPP(int PP)",
		shortName : "setPP",
		description : "Sets the PP to the number given"
	},
	{
		name : "void setPPMax(int PPMax)",
		shortName : "setPPMax",
		description : "Sets the max PP to the number given"
	}
    ]
}];

var Attacks = [
{
	name : "ATK_CLASS(name)",
	shortName : "ATK_CLASS",
	description : "Replaces <code>class name : public Attack { public : </code>"
},
{
	name : "EB",
	shortName : "EB",
	description : "Replaces <code>int effectBefore(OpMon &atk, OpMon &def)</code>"
},
{
	name : "EA",
	shortName : "EA",
	description : "Replaces <code>int effectAfter(OpMon &atk, OpMon &def)</code>"
},
{
	name : "IF_ATK(NAME)",
	shortName : "IF_ATK",
	description : "Used in Attacks::newAtk. \"Registers\" an attack class."
},
{
	name : "namespace Attacks",
	shortName : "Attacks",
	description : "Namespace containing all the attacks inherited from the Attack class.",
	elements : [
	{
		name : "Attack* newAtk(std::string name)",
		shortName : "newAtk",
		description : "Returns a pointer to a new Attack object from the name given in parameters."
	}
	]
}
];

var Enum = [
{
	name : "enum class Status",
	shortName : "Status",
	description : "Enumerates the different OpMon status",
	elements : [
	{
		name : "BURNING",
		shortName : "BURNING",
		description : ""
	},
	{
		name : "PARALYSED",
		shortName : "PARALYSED",
		description : ""
	},
	{
		name : "SLEEPING",
		shortName : "SLEEPING",
		description : ""
	},
	{
		name : "FROZEN",
		shortName : "FROZEN",
		description : ""
	},
	{
		name : "POISONED",
		shortName : "POISONED",
		description : ""
	},
	{
		name : "NOTHING",
		shortName : "NOTHING",
		description : ""
	}
	]
},
{
	name : "enum class Stats : int",
	shortName : "Stats",
	description : "Enumerates the differents OpMon stats",
	elements : [
	{
		name : "ATK",
		shortName : "ATK",
		description : "Value : 6"
	},
	{
		name : "DEF",
		shortName : "DEF",
		description : "Value : 1"
	},
	{
		name : "ATKSPE",
		shortName : "ATKSPE",
		description : "Value : 2"
	},
	{
		name : "DEFSPE",
		shortName : "DEFSPE",
		description : "Value : 3"
	},
	{
		name : "SPE",
		shortName : "SPE",
		description : "Value : 4"
	},
	{
		name : "HP",
		shortName : "HP",
		description : "Value : 5"
	},
	{
		name : "ACC",
		shortName : "ACC",
		description : "Value : 7"
	},
	{
		name : "EVA",
		shortName : "EVA",
		description : "Value : 8"
	},
	{
		name : "NOTHING",
		shortName : "NOTHING",
		description : "Value : 0"
	}
	]
}
];

var files = [AGameScreen, AnimationCtrl, EventsCtrl, MainMenuCtrl, OptionsMenuCtrl, OverworldCtrl, PlayerCtrl, StartSceneCtrl, Attack, Attacks, Enum];
var fnames = ["Controller::AGameScreen", "Controller::AnimationCtrl", "Controller::EventsCtrl", "Controller::MainMenuCtrl", "Controller::OptionsMenuCtrl", "Controler::OverworldCtrl", "Controller::PlayerCtrl", "Controller::StartSceneCtrl", "Model::Attack", "Model::Attacks", "Model - Enumerations"];
