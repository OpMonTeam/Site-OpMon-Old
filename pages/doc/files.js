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
},
{
	name : "enum class BagCat",
	shortName : "BagCat",
	description : "Enumarates the bag categories",
	elements : [
	{
		
	}
	]
}
];

var Nature = [
{
	name : "class NatureClass",
	shortName : "NatureClass",
	description : "Defines a nature. A natures brings a malus and a bonus on a stat. Each OpMon have a nature chosen randomly.",
	elements : [
	{
		name : "Stats bonus",
		shortName : "bonus",
		description : "The bonus brought by the nature"
	},
	{
		name : "Stats malus",
		shortName : "malus",
		description : "The malus brought by the nature"
	},
	{
		name : "int id",
		shortName : "id",
		description : "Nature's id"
	},
	{
		name : "NatureClass(Stats bonus, Stats malus, int id)",
		shortName : "ctorNatureClass",
		description : "Constructs a nature"
	}
	]
},
{
	name : "const NatureClass natures[25]",
	shortName : "natures",
	description : "Natures list"
},
{
	name : "bool operator==(NatureClass const& one, NatureClass const &two)",
	shortName : "operatorequalequal",
	description : "Compares two natures"
},
{
	name : "enum class Nature : unsigned int",
	shortName : "Nature",
	description : "Natures enumerations"
}
];

var OpMon = [{
	name : "namespace CalcCourbs",
	shortName : "CalcCourbs",
	description : "Namespace containing the function used to calculate the OpMon's exp. The different courbs are 'Erratic', 'fluctuating', 'slow', 'normal', 'parabolic' and 'quick'. More info on Bulbapedia."
},
{
	name : "class OpMon",
	shortName : "OpMon",
	description : "Class defining an OpMon. This is NOT defining a species. Check the Species class instead.",
    elements : [
	{
		name : "bool afraid",
		shortName : "afraid",
		description : "If true, the OpMon have the status 'afraid'."
	},
	{
		name : "bool confused",
		shortName : "confused",
		description : "If true, the OpMon have the status 'confused'."
	},
	{
		name : "bool cursed",
		shortName : "cursed",
		description : "If true, the OpMon have the status 'cursed'."
	},
	{
		name : "bool falsif",
		shortName : "falsif",
		description : "If true, the OpMon is not usable, the object is like \"empty\". Used to check if the OpMon have been correctly initialized."
	},
	{
		name : "bool inLove",
		shortName : "inLove",
		description : "If true, the OpMon have the status 'in love'."
	},
	{
		name : "OpMon(const std::string &nickname, const Species &species, int level, const std::vector<Attack *> &attacks, Nature nature)",
		shortName : "ctorOpMon",
		description : "Contructs an OpMon with all the variables"
	},
	{
		name : "OpMon(std::ifstream &in)",
		shortName : "ctorOpMon2",
		description : "Contructs an OpMon from data in a file."
	},
	//___________________________________ Methods
	{
		name : "void attacked(int hpLost)",
		shortName : "attacked",
		description : "This method is called when the OpMon is attacked by an another OpMon. It lost the number of HP given in hpLost."
	},
	{
		name : "void calcStats()",
		shortName : "calcStats",
		description : "When called, this method recalcs the statistics from the EV, IV and species."
	},
	{
		name : "bool captured(I_OpBox const& OpBox)",
		shortName : "captured",
		description : "Tries to capture an OpMon with the ball given in parameter. Returns true if it succeeds."
	},
	{
		name : "bool change<i>STAT</i>(int power)",
		shortName : "changeSTAT",
		description : "In the code, there is one method like this for each stat : changeATK, changeACC, changeEVA, changeDEF, changeATKSPE, changeDEFSPE, changeSPE. When called, this method decreases or increases by the number of level given in parameter the of the method. Give a negative number to decrease, and a positive number to increase."
	},
	{
		name : "void evolve()",
		shortName : "evolve",
		description : "This method is called when the OpMon evolves."
	},
	{
		name : "void levelUp()",
		shortName : "levelUp",
		description : "This method is called when the OpMon gain a level."
	},
	{
		name : "bool isHoldingItem()",
		shortName : "isHoldingItem",
		description : "Returns true if the item held is not a nullptr."
	},
	{
		name : "int win(OpMon &looser)",
		shortName : "win",
		description : "This method is called when the OpMon wins against another OpMon (looser)."
	},

	{
		name : "bool itemUsed(Item *used)",
		shortName : "itemUsed",
		description : "This method is called when an item is used on the OpMon. Returns true if the item must be removed from the player's bag.",
	},
	{
		name : "Item* hold(Item *item)",
		shortName : "hold",
		description : "Replaces the old held item by the new given in parameter. Returns the old item."
	},
	{
		name : "void traded()",
		shortName : "traded",
		description : "This method is called when the OpMon is traded against another OpMon"
	},
	{
		name : "void toolEvTrade()",
		shortName : "toolEvTrade",
		description : "(THIS METHOD WILL BE REMOVED) This method was used for a secret thing in the game. But now it is useless."
	},

	{
		name : "void setStats(int stats[], Attack *attacks[], const Species &species, Type types[])",
		shortName : "setStats",
		description : "Sets all the stats given. Useful to set everything in one line."
	},
	
	
	{
		name : "Status getStatus()",
		shortName : "getStatus",
		description : "Returns the OpMon's status"
	},
	{
		name : "void setStatus(Status status",
		shortName : "setStatus",
		description : "Sets the OpMon's status"
	},
	{
		name : "int getStatHP()",
		shortName : "getStatHP",
		description : "Returns the OpMon's max HP"
	},
	{
		name : "int getStatLove()",
		shortName : "getStatLove",
		description : "Return the OpMon's love stat"
	},
	{
		name : "std::string getNickname()",
		shortName : "getNickname",
		description : "Returns the OpMon's nickname"
	},
	{
		name : "void heal(int HP)",
		shortName : "heal",
		description : "Heals the OpMon by the number of HP given in parameter"
	},
	{
		name : "int getLevel()",
		shortName : "getLevel",
		description : "Returns the OpMon's level"
	},
	{
		name : "std::vector<Attack *> getAttcks()",
		shortName : "getAttacks",
		description : "Returns the OpMon's attacks"
	},
	{
		name : "int getStatEVA()",
		shortName : "getStatEVA",
		description : "Returns the OpMon's evasion stat"
	},
	{
		name : "int getStatACC()",
		shortName : "getStatACC",
		description : "Returns the OpMon's accuracy stat"
	},
	{
		name : "void getEvs(OpMon const &looser)",
		shortName : "getEvs",
		description : "Add the EV given by the looser OpMon to the current OpMon's EVs"
	},
	{
		name : "int getType1()",
		shortName : "getType1",
		description : "Returns the OpMon's first type."
	},
	{
		name : "int getType2()",
		shortName : "getType2",
		description : "Returns the OpMon's secondary typ.e"
	},
	{
		name : "void setType1(Type type)",
		shortName : "setType1",
		description : "Sets the OpMon's first type."
	},
	{
		name : "void setType2(Type type)",
		shortName : "setType2",
		description : "Sets the OpMon's secondary type."
	},
	{
		name : "int getStat<i>STAT</i>()",
		shortName : "getStatSTAT",
		description : "Returns a stat. The differents methods are : getStatATK, getStatATKSPE, getStatDEF, getStatDEFSPE, getStatSPE."
	},
	{
		name : "Species& getSpecies()",
		shortName : "getSpecies",
		description : "Returns the OpMon's species."
	},
	{
		name : "Item* itemHeld()",
		shortName : "itemHeld",
		description : "Returns the item held."
	},
	{
		name : "void setStat(Stats stat, int newStat)",
		shortName : "setStat",
		description : "Sets the statistic indicated in 'stat' to the new value given in 'newStat'."
	},
	{
		name : "std::string save()",
		shortName : "save",
		description : "Put all the OpMon's data in a string, ready to be put in a file. The constructor with std::ifstream can decode the string."
	}
	]
}
];

var files = [AGameScreen, AnimationCtrl, EventsCtrl, MainMenuCtrl, OptionsMenuCtrl, OverworldCtrl, PlayerCtrl, StartSceneCtrl, Attack, Attacks, Enum, Nature, OpMon];
var fnames = ["Controller::AGameScreen", "Controller::AnimationCtrl", "Controller::EventsCtrl", "Controller::MainMenuCtrl", "Controller::OptionsMenuCtrl", "Controler::OverworldCtrl", "Controller::PlayerCtrl", "Controller::StartSceneCtrl", "Model::Attack", "Model::Attacks", "Model - Enumerations",
"Model::Nature & Model::NatureClass", "Model::OpMon"];
