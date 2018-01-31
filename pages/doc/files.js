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

var files = [AGameScreen, AnimationCtrl];
var fnames = ["Controller::AGameScreen", "Controller::AnimationCtrl"];
