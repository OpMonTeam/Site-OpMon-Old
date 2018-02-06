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
		name : "virtual GameStatus update() = 0",
		shortName : "update",
		description : "Update and draw the game. This method is called once per frame."
	},
	{
		name : "virtual void suspend()",
		shortName : "suspend",
		description : "Suspend the game screen"
	},
	{
		name : "virtual void resume()",
		shortName : "resume",
		description : "Resume the game screen"
	},
	{
		name : "AGameScreen *getNextGameScreen()",
		shortName : "getNextGameScreen",
		description : "Returns the next game screen that must be printed after this one. When the method checkEvent will return GameStatus::NEXT, this method will be called to get the next game screen."
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
		name : "void updateEvents(std::vector<Model::Event*>& events, Model::Player& player, View::Overworld& overworld)",
		shortName : "updateEvents",
		description : "Calls the \"update\" method for all the events given in parameter."
	},
	{
		name : "void actionEvents(std::vector<Model::Event*>& events, Model::Player& player, Model::Events::EventTrigger toTrigger, View::Overworld& overworld)",
		shortName : "actionEvents",
		description : "Checks if the events can be activated, and calls the action method of Event. Function called by checkAction."
	},
	{
		name : "void checkAction(sf::Event const& event, Model::Player& player, View::Overworld& overworld)",
		shortName : "checkAction",
		description : "Checks if an event must be actioned and calls actionEvent."
		
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
	    name : "GameStatus update() override",
	    shortName : "update",
	    description : "See AGameScreen::update"
	},
	{
	    name : "void suspend() override",
	    shortName : "suspend",
	    description : "See AGameScreen::suspend"
	},
	{
	    name : "void resume() override",
	    shortName : "resume",
	    description : "See AGameScreen::resume"
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
	    name : "GameStatus update() override",
	    shortName : "update",
	    description : "See AGameScreen::update"
	},
	{
	    name : "void suspend() override",
	    shortName : "suspend",
	    description : "See AGameScreen::suspend"
	},
	{
	    name : "void resume() override",
	    shortName : "resume",
	    description : "See AGameScreen::resume"
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

var files = [AGameScreen, AnimationCtrl, EventsCtrl, MainMenuCtrl, OptionsMenuCtrl, OverworldCtrl, Playerctrl];
var fnames = ["Controller::AGameScreen", "Controller::AnimationCtrl", "Controller::EventsCtrl", "Controller::MainMenuCtrl", "Controller::OptionsMenuCtrl", "Controler::OverworldCtrl", "Controller::PlayerCtrl"];
