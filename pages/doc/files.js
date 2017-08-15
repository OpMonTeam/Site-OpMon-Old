var main = [
    "main.hpp",
    {
	name : "UNS",
	shortName : "UNS",
	description : "Shortcut for using namespace std;"
    },
    {
	name : "FOR_EACH",
	shortName : "FOR_EACH",
	description  : "Acts like a for(type var : array), but with a pointer and an iterator. Take 4 parameters : The array's type, the array's name, the array's size and an brace (The brace is here for the editors which colors corresponding blocs limits)"
    },
    {
	name : "LOCAL_TEST",
	shortName : "LOCAL_TEST",
	description : "If declared, this macro indicate that the program must search the resources in the execution repertory. Else, the program will search the resources in /usr/share/OpMon/. Do not have any effect on Windows."
    },
    {
	name : "GET_TICKS",
	shortName : "GET_TICKS",
	description : "Return the number of ticks counting form the beginning of the program in milliseconds."
    },
    {
	name : "PRINT_TICKS",
	shortName : "PRINT_TICKS",
	description : "Prints the number of ticks in a stream, counting from the beginning of the program."
    },
    {
	name : "std::ofstream rlog",
	shortName : "rlog",
	description : "The log file's stream."
    },
    {
	name : "std::ofstream rerrLog",
	shortName : "rerrLog",
	description : "The error log file's stream."
    },
    {
	name : "std::string optSave",
	shortName : "optSave",
	description : "Contains the name of the options save file"
    },
    {
	name : "sf::Clock ticks",
	shortName : "ticks",
	description : "A clock that count every tick of the program."
    },
    {
	name : "void handleError(std::string const&, bool)",
	shortName : "handleError",
	description : "A function that handle errors. The first parameters contains the error message. If the second parameter is true, the program closes. The program closes too if there is too much errors."
    },
    {
	name : "int quit(int const&)",
	shortName : "quit",
	description : "Function that free the allocated memory before closing the program, returning the first parameter."
    },
    {
	name : "namespace Main",
	shortName : "nMain",
	description : "Namespace containing useful thing for the program."
    },
    {
	name : "void Main::main()",
	shortName : "nMain-main",
	description : "Function in the namespace Main booting the program."
    },
    {
	name : "Player Main::player",
	shortName : "nMain-player",
	description : "Variable containing the player"
    },
    {
	name : "int main(int, char**)",
	shortName : "main",
	description : "The program's main."
    },
    {
	name : "std::string& operator<<(std::string, std::string const&)",
	shortName : "operator<<1",
	description : "Operator concatenating two strings using a string stream."
    },
    {
	name : "std:string& operator<<(std::string, int const&)",
	shortName : "operator<<2",
	description : "Operator concatenating a string with an int using a string stream."
    },
    {
	name : "std::string operator<<(std::string, char*)",
	shortName : "operator<<3",
	description : "Operator concatenating a C++ string with a C string using a string stream."
    }

];

var initializer = [
    "Initializer.hpp",
    {
	name : "ATK_LIST",
	shortName : "ATK_LIST",
	description : "Macro declaring a variable \"AtkArray\". This macro takes one parameter, a numbers, used to name the variable (tabNumber). If the parameter is 5, the variable will be called tab5."
    },
    {
	name : "ATK_ADD_LIST",
	shortName : "ATK_ADD_LIST",
	description : "Macro shortcut to the addition of an attack in the attack array of an OpMon."
    },
    {
	name : "OP_NUMBER",
	shortName : "OP_NUMBER",
	description : "Constant containing the number of OpMons"
    },
    {
	name : "namespace Initializer",
	shortName : "nInitializer",
	description : "Namespace containing variables and functions that loads the resources in memory.",
	elements : [
	    {
		name : "Espece *listeOp[OP_NUMBER]",
		shortName : "listeOp",
		description : "Array containing all the OpMons species."
	    },
	    {
		name :  "std::vector<NumberedArray> opOpLvl[OP_NUMBER]",
		shortName : "opOpLvl",
		description : "Array of NumberedArray, defining the attacks learnt by level for each OpMon."
	    },
	    {
		name : "Evolutions::E_Nope *ne",
		shortName : "ne",
		description : "Variable containing an object E_Nope, avoiding allowing a lot of memory for these objects."
	    },
	    {
		name : "std::vector<Map*> maps",
		shortName : "maps",
		descriptions : "Vector containing the maps"
	    },
	    {
		name : "std::vector<sf::Music*> townMusics",
		shortName : "townMusics",
		description : "Vector containing the maps' musics"
	    },
	    {
		name : "sf::Texture texturePP[4]",
		shortName : "texturePP",
		description : "Array containing the principal character's textures"
	    },
	    {
		name : "sf::Texture marchePP[4]",
		shortName : "marchePP",
		description : "Array containing the principal character's walking textures"
	    },
	    {
		name : "sf::Texture marchePP2[4]",
		shortName : "marchePP2",
		description : "Array containing other principal character's walking textures"
	    },
	    {
		name : "std::vector<std::vector<sf::Texture > > doorsTextures",
		shortName : "doorsTextures",
		description : "Double vector containing the doors textures."
	    },
	    {
		name : "std::vector<int> evs[OP_NUMBER]",
		shortName : "evs",
		description : "Array of vectors containing the evs for each OpMon"
	    },
	]
    }
];

var opstring = [
    "OpString.hpp",
    {
	name : "class OpString",
	shortName : "cOpString",
	description : "This class represents a String with objects. It replaces every '~' in a string given by a key (See StringKeys) by a string given on the constructor parameter.",
	elements : [
	    {
		name : "OpString(std::string const&, ...)",
		shortName : "ctorOpString1",
		description : "Constructs an OpStrings. The first parameters ask for the key allowing to get the string in StringKeys. You can after add pointers to std::string objects. Please do not give other things than std::string pointers, this could make bugs and errors. The strings will be, when the method getString() is called, added in replacement of every '~' on the string. If there is more string pointers than '~' in the string, the exedent of objects will be ignored. In the reverse case, the '~' will just vanish from the string."
	    },
	    {
		name : "OpString()",
		shortName : "ctorOpString2",
		description : "The default constructor, doing nothing. If you call any method of this class on a OpString constructed with this constructor, it will return an empty string. This constructor is useful only when you want to declare a variable without defining it."
	    },
	    {
		name : "std::string getObject(int const&)",
		shortName : "getObject",
		description : "When called, this method returns the string pointed by the pointer at the index given. This method do not return the pointer."
	    },
	    {
		name : "std::string getKey()",
		shortName : "getKey",
		description : "Returns the key, used to get the string with StringKeys::get."
	    },
	    {
		name : "sf::String getString()",
		shortName : "getString",
		description : "Return the string, with the '~' replaced by the strings indicated in the constructor. The string is an sf::String from sfml because it works better with the non-ascii characters."
	    },
	    {
		name : "static OpString voidStr",
		shortName : "voidStr",
		description : "This static variable contains a OpString generated with the default constructor. It is used for memory saving, using only one variable than creating many."
	    },
	]
    },
];

var files = [main, initializer, opstring];
