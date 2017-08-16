var main = [
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
	description : "Namespace containing useful thing for the program.",
	elements : [
	    {
		name : "void main()",
		shortName : "nMain-main",
		description : "Function in the namespace Main booting the program."
	    },
	    {
		name : "Player player",
		shortName : "player",
		description : "Variable containing the player"
	    }
	]
    },
    {
	name : "int main(int, char**)",
	shortName : "main",
	description : "The program's main."
    },
    {
	name : "std::string& operator&lt;&lt;(std::string, std::string const&)",
	shortName : "operator&lt;&lt;1",
	description : "Operator concatenating two strings using a string stream."
    },
    {
	name : "std:string& operator&lt;&lt;(std::string, int const&)",
	shortName : "operator&lt;&lt;2",
	description : "Operator concatenating a string with an int using a string stream."
    },
    {
	name : "std::string& operator&lt;&lt;(std::string, char*)",
	shortName : "operator&lt;&lt;3",
	description : "Operator concatenating a C++ string with a C string using a string stream."
    }

];

var initializer = [
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
		name :  "std::vector&lt;NumberedArray&gt; opOpLvl[OP_NUMBER]",
		shortName : "opOpLvl",
		description : "Array of NumberedArray, defining the attacks learnt by level for each OpMon."
	    },
	    {
		name : "Evolutions::E_Nope *ne",
		shortName : "ne",
		description : "Variable containing an object E_Nope, avoiding allowing a lot of memory for these objects."
	    },
	    {
		name : "std::vector&lt;Map*&gt; maps",
		shortName : "maps",
		descriptions : "Vector containing the maps"
	    },
	    {
		name : "std::vector&lt;sf::Music*&gt; townMusics",
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
		name : "std::vector&lt;std::vector&lt;sf::Texture &gt; &gt; doorsTextures",
		shortName : "doorsTextures",
		description : "Double vector containing the doors textures."
	    },
	    {
		name : "std::vector&lt;int&gt; evs[OP_NUMBER]",
		shortName : "evs",
		description : "Array of vectors containing the evs for each OpMon"
	    },
	]
    }
];

var opstring = [
    {
	name : "class OpString",
	shortName : "cOpString",
	description : "This class represents a String with objects. It replaces every '~' in a string given by a key (See StringKeys) by a string given on the constructor parameter.",
	elements : [
	    {
		name : "OpString(std::string const& key, ...)",
		shortName : "ctorOpString1",
		description : "Constructs an OpStrings. The first parameters ask for the key allowing to get the string in StringKeys. You can after add pointers to std::string objects. Please do not give other things than std::string pointers, this could make bugs and errors. The strings will be, when the method getString() is called, added in replacement of every '~' on the string. If there is more string pointers than '~' in the string, the exedent of objects will be ignored. In the reverse case, the '~' will just vanish from the string."
	    },
	    {
		name : "OpString()",
		shortName : "ctorOpString2",
		description : "The default constructor, doing nothing. If you call any method of this class on a OpString constructed with this constructor, it will return an empty string. This constructor is useful only when you want to declare a variable without defining it."
	    },
	    {
		name : "std::string getObject(int const& index)",
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

var stringkeys = [
    {
	name : "namespace StringKeys",
	shortName : "nStringKeys",
	description : "StringKeys is a tool reading strings and keys in a file, allowing to change files and translate the game. It associate a key with a string, according to the read file.",
	elements : [
	    {
		name : "std::vector&lt;std::string&gt; keys",
		shortName : "keys",
		description : 'Vector containing every key. If you pick a key at an index, you will have the corresponding string with the same index in the vector "strings".'
	    },
	    {
		name : "std::vector&lt;sf::String&gt; strings",
		shortName : "strings",
		description : 'Vector containing every string. If you pick a string at an index, you will have the corresponding key with the same index in the vector "key". The strings\' type is sf::String, from sfml, because this format is better for non-ascii characters.'
	    },
	    {
		name : "sf::String& get(std::string key)",
		shortName : "get",
		description : "Function returning a reference to the string associated with the given key."
	    },
	    {
		name : "void initialize(std::string const& file)",
		shortName : "initialize",
		description : "Read the strings and the keys from the file given, and save them in the vectors keys and strings."
	    },
	    {
		name : "sf::String split(sf::String const&, char const& splitter, int const& part",
		shortName : "split1",
		description : "Deprecated. Use the other StringKeys::split. <br/>Splits a string from the char given, and returns the part asked. This function is deprecated because the other split returns directly the array."
	    },
	    {
		name : "std::vector&lt;sf::String&gt; split(sf::String const, char const& splitter)",
		shortName : "split2",
		description : "Splits a string from the char given and returns a vector containing all the parts."
	    },
	    {
		name : "std::string sfStringtoStdString(sf::String const&)",
		shortName : "sfStringtoStdString",
		description : "Converts a sf::String to a std::String."
	    },
	    {
		name : "int countInstances(sf::String const&, char const&)",
		shortName : "countInstances",
		description : "Returns the number of instances of the char given in the string given."
	    }

	]
    },
];

var internalfiles = [
    {
	name : "namespace InternalFiles",
	shortName : "nInternalFiles",
	description : "This namespace contains strings in an array. Theses internal files are useful for files that the player must not modify, like the collisions",
	elements : [
	    {
		name : "std::vector&lt;std::string&gt; filesNames",
		shortName : "filesNames",
		description : "This vector contains all the files' names. The indexes in this vector are associated with the indexes in the vector \"files\"."
	    },
	    {
		name : "std::vector&lt;std::string&gt; files",
		shortName : "files",
		description : "This vector contains all the files content. The names corresponding to a file is in the \"filesNames\" vector."
	    },
	    {
		name : "void registerFiles()",
		shortName : "registerFiles",
		description : "This function registers the files in the vectors."
	    },
	    {
		name : "std::ostringstream *openFileOut(std::string const& name)",
		shortname : "openFileOut",
		description : "This function opens an out stringstream to the string with the name given in parameters. Returns the pointer to the std::ostringstream created. If no files exists with the name given, the function returns NULL"
	    },
	    {
		name : "std::istringstream openFileIn(std::string const& name)",
		shortName : "openFileIn",
		description : "This function opens an in stringstream to the string with the name given in parameters. Returns the pointer to the std::istringstream created. If no files exists with the name given, the function returns NULL"
	    }
	]
    },
];



var files = [main, initializer, opstring, stringkeys, internalfiles];
var fnames = ["main.hpp", "Initializer.hpp", "OpString.hpp", "StringKeys.hpp", "InternalFiles.hpp"];
