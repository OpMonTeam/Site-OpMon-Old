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

var optionssave = [
    {
	name : "addParam",
	shortName : "addParam",
	description : "Writing this is equal to write modifyParam or addOrModifyParam. This macro's point is to indicate wich use the function is called. See addOrModifParam for more informations."
    },
    {
	name : "modifyParam",
	shortName : "modifyParam",
	description : "Writing this is equal to write addParam or addOrModifyParam. This macro's point is to indicate wich use the function is called. See addOrModifParam for more informations."
    },
    {
	name : "namespace OptionsSave",
	shortName : "nOptionsSave",
	description : "Namespace containing elements to save the game's parameters, and edit them easily.",
	elements : [
	    {
		name : "class Param",
		shortName : "cParam",
		description : "This class defines a parameter, with it's name and it's value",
		elements : [
		    {
			name : "Param(std::string name, std::string value)",
			shortName : "ctorParam",
			description : "Constructs a parameter with it's name and it's value."
		    },
		    {
			name : "std::string getName() const",
			shortName : "getName",
			description : "Return the parameter's name."
		    },
		    {
			name : "std::string getValue() const",
			shortName : "getValue",
			description : "Return the parameter's value."
		    },
		    {
			name : "void setValue(std::string value)",
			shortName : "setValue",
			description : "Change the parameter's value."
		    }
		]
	    },
	    {
		name : "std::vector&lt;Param&gt; paramList",
		shortName : "paramList",
		description : "Vector containing all the parameters read in the parameters save file."
	    },
	    {
		name : "Param getParam(std::string const& nom)",
		shortName : "getParam",
		description : 'Returns the parameter with the given name. If no parameter exists, returns a parameter named "NULL" and having the value "NULL."'
	    },
	    {
		name : "void addOrModifParam(std::string const& nom, std::string const& value)",
		shortName : "addOrModifParam",
		description : "This function adds a parameter to the list, or modify it if it already exists. To specify the usage of this function, use the two macros addParam and modifyParam."
	    },
	    {
		name : "Param deleteParam(std::string const& nom)",
		shortName : "deleteParam",
		description : 'Delete the parameter with the name given and returns it. If no parameter with this name exists, returns a parameter named "NULL" and having the value "NULL".' 
	    },
	    {
		name : "void saveParams(std::string const& file)",
		shortName : "saveParams",
		description : "Saves the parameters in a file with the given name."
	    },
	    {
		name : "void initParams(std::string const& file)",
		shortName : "initParams",
		description : "Reads the parameters in a file with the given name."
	    },
	    {
		name : "bool checkParam(std::string const& name)",
		shortName : "checkParam",
		description : "Returns true if the parameter exists, false if not."
	    }
	]
    }
];

var save = [
    {
	name : "namespace Save",
	shortName : "nSave",
	description : "Namespace containing the functions for saving the game and the player.",
	elements : [
	    {
		name : "int save(Player *toSave, std::string const& file)",
		shortName : "save",
		description : "Functions saving the player in a file with the name given. Always returns 0."
	    },
	    {
		name : "Player* loadPlayer(std::string const& fileIn)",
		shortName : "loadPlayer",
		description : "Loads a player from a file with the name given in parameter."
	    }
	]
    }
];

var equipe = [
    {
	name : "class Equipe",
	shortName : "cEquipe",
	description : "Class defining a OpMon team",
	elements : [
	    {
		name : "Equipe(std::string const& nom)",
		shortName : "ctorEquipe",
		description : "Constructs a Equipe object with a name, and without any OpMons."
	    },
	    {
		name : "OpMon** getEquipe()",
		shortName : "getEquipe",
		description : "Returns the OpMon team."
	    },
	    {
		name : "void heal()",
		shortName : "heal",
		description : "Heals the team."
	    },
	    {
		name : "bool addOpMon(OpMon *toAdd)",
		shortName : "addOpMon",
		description : "Adds an OpMon to the team, returns true if the OpMon have been added, false if the team is full."
	    },
	    {
		name : "void removeOp(int number)",
		shortName : "removeOp",
		description : "Removes an OpMon of the team, at the index given in parameter."
	    },
	    {
		name : "OpMon *operator[](int id) const",
		shortName : "operator[]",
		description : "Operator returning the opmon at the specified index."
	    },
	    {
		name : "bool isKo() const",
		shortName : "isKo",
		description : "Returns true if the team is K.O"
	    },
	    {
		name : "int getSize() const",
		shortName : "getSize",
		description : "Returns the number of OpMons in the team.",
	    },
	    {
		name : "void operator+=(OpMon*)",
		shortName : "operator+=",
		description : "Same effect than \"addOpMon\""
	    },
	    {
		name : "void operator-=(int id)",
		shortName : "operator-=",
		description : "Same effet than \"removeOp\""
	    },
	    {
		name : "void save()",
		shortName : "save",
		description : "Saves the OpMon team in Save::saveOutput"
	    },
	]
    },
];

var player = [
    {
	name : "class Player",
	shortName : "cPlayer",
	description : "Class defining a Player, with it's sprite, items and team.",
	elements : [
	    {
		name : "Player(std::string const& name)",
		shortName : "ctorPlayer1",
		description : "Constructor creating a Player with a name."
	    },
	    {
		name : "Player()",
		shortName : "ctorPlayer2",
		description : "Constructor creating a Player without a name."
	    },
	    {
		name : "Player(std::ifstream &in, std::string &name)",
		shortName : "ctorPlayer3",
		description : "Constructs a player from the file and the name given."
	    },
	    {
		name : "void addItem(int itemID)",
		shortName : "addItem",
		description : "Adds one object with the given ID to the player."
	    },
	    {
		name : "int checkItem(int itemID)",
		shortName : "checkItem",
		description : "Returns the number of the item associated with the given number the player have."
	    },
	    {
		name : "bool deleteItem(int itemID)",
		shortItem : "deleteItem",
		description : "Delete one item with the given ID. If the player do not have this item, the function returns false."
	    },
	    {
		name : "std::string getName() const",
		shortItem : "getName",
		description : "Returns the player's name."
	    },
	    {
		name : "const std::string* getNameP() const",
		shortItem : "getNameP",
		description : "Returns a constant pointer to the player's name."
	    },
	    {
		name : "void setName(std::string const& name)",
		shortItem : "setName",
		description : "Changes the player's name by the name given in parameter."
	    },
	    {
		name : "int getDressID() const",
		shortName : "getDressID",
		description : "Returns the player's trainer ID"
	    },
	    {
		name : "void addOpMonToPC(OpMon *toAdd)",
		shortName : "addOpMonToPC",
		description : "Adds a OpMon to the player's PC"
	    },
	    {
		name : "OpMon* getOp(int ID) const",
		shortName : "getOp",
		description : "Returns the OpMon corresponding to the index given from the team."
	    },
	    {
		name : "OpMon* getPcOp(int ID) const",
		shortName : "getPcOp",
		description : "Returns the OpMon in the place given in the PC."
	    },
	    {
		name : "void healOp()",
		shortName : "healOp",
		description : "Heals all OpMons in the team."
	    },
	    {
		name : "bool addOpToEquipe(OpMon *toAdd)",
		shortName : "addOpToEquipe",
		description : "Adds a OpMon to the team, returns false if the team is full."
	    },
	    {
		name : "void save()",
		shortName : "save",
		description : "Saves the player's data in Save::saveOutput"
	    },
	    {
		name : "void setMap(int ID)",
		shortName : "setMap",
		description : "Sets the map where the player currently is."
	    },
	    {
		name : "std::Sprite& getSprite()",
		shortName : "getSprite",
		description : "Returns a reference to the Player's sprite."
	    },
	    {
		name : "int getppDir()",
		shortName : "getppDir",
		description : "Returns the player's direction."
	    },
	    {
		name : "void setppDirPointer(int *ppDir)",
		shortName : "setppDirPointer",
		description : "Sets the ppDir pointer. ppDir will follow the variable given."
	    },
	    {
		name : "void setppDir(int ppDir)",
		shortName : "setppDir",
		description : "Changes the player's direction."
	    },
	    {
		name : "bool gameIsOver",
		shortName : "gameIsOver",
		description : "If true, the game shuts down. Used in some functions of newGui."
	    }
	    
	]
    },
];

var attaque = [
    {
	name : "class Attaque",
	shortName : "cAttaque",
	description : "Contains the definition of an OpMon attack. This class is pure virtual and, to create an attack, a derivated class must be created, to overload the effetAvant and effetApres methods.",
	elements : [
	    {
		name: "Attaque(std::string nom, int puissance, int type, int precision, bool special, bool status, int chanceDeCoups, bool rateJamais, int ppMax, int priorite, std::string className)",
		shortName : "ctorAttaque",
		description : "Constructs an attack with the given elements.",
		elements : [
		    {
			name : "std::string name",
			shortName : "ctorEname",
			description : "The attack's name."
		    },
		    {
			name : "int puissance",
			shortName : "ctorEpuissance",
			description : "The attack's power."
		    },
		    {
			name : "int type",
			shortName : "ctorEtype",
			description : "The attack's type. Must be completed with an element of the enumeration Type."
		    },
		    {
			name : "int precision",
			shortName : "ctorEprecision",
			description : "The attack's precision."
		    },
		    {
			name : "bool special",
			shortName : "ctorEspecial",
			description : "Must be true if the attack is a special attack, false if the attack is a physical or status attack."
		    },
		    {
			name : "bool status",
			shortName : "ctorEStatus",
			description : "True if the attack is a status attack and that no damage must be inflicted. False if the attack inflict damage."
		    },
		    {
			name : "int chanceDeCoups",
			shortName : "chanceDeCoups",
			description : "Represents the chance to have a critical hit. The chance to have a critical hit is 1/chanceDeCoups. The most common value is 16."
		    },
		    {
			name : "bool rateJamais",
			shortName : "rateJamais",
			description : "True if the attack never misses."
		    },
		    {
			name : "int ppMax",
			shortName : "ppMax",
			description : "Defines the attack's maximum power points. A power point is equal to one attack use."
		    },
		    {
			name : "int priorite",
			shortName : "priorite",
			description : "Defines the level of priority of the attack."
		    },
		    {
			name : "std::string className",
			shortName : "className",
			description : "The name of the attack's class."
		    }
		    
		]
	    },
	    {
		name : "virtual int effetAvant(OpMon &atk, OpMon &def) = 0",
		shortName : "effetAvant",
		description : "Method executed before the damage calculation. This method must be redefined in a derived class."
	    },
	    {
		name : "virtual int effetApres(OpMon &atk, OpMon &def) = 0",
		shortName : "effetApres",
		description : "Method executed after the damage calculation. This methode must be redefined in a derived class."
	    },
	    {
		name : "void healPP()",
		shortName : "healPP",
		description : "Puts the attack's power points to the maximum."
	    },
	    {
		name : "int getType()",
		shortName : "getType",
		description : "Returns the type, an int associated with the enumeration Type."
	    },
	    {
		name : "int attack(OpMon &atk, OpMon &def)",
		shortName : "attack",
		description : "Make the OpMon atk attacks the OpMon def with this attack."
	    },
	    {
		name : "void siEchoue(OpMon &atk, OpMon &def)",
		shortName : "siEchoue",
		description : "Empty method, must be overloaded if the attack have an effet when it fails. This method is called when the attack fails."
	    },
	    {
		name : "Class&lt;Attaque&gt;* getClass()",
		shortName : "getClass",
		description : "Returns the attack's Class object."
	    },
	    {
		name : "std::string getClassName()",
		shortName : "getClassName",
		description : "Returns the attack's class name."
	    },
	    {
		name : "std::string save()",
		shortName : "save",
		description : "Saves this instance of Attack in Save::saveOutput."
	    },
	    {
		name : "void setPP(int PP)",
		shortName : "setPP",
		description : "Changes the number of PP by the new one given in parameter."
	    },
	    {
		name : "void setPPMax(int PPMax)",
		shortName : "setPPMax",
		description : "Changes the maximum number of PP by the new one given in parameter."
	    }
	]
    },
];

var files = [main, initializer, opstring, stringkeys, internalfiles, optionssave, save, equipe, player, attaque];
var fnames = ["main.hpp", "Initializer.hpp", "OpString.hpp", "StringKeys.hpp", "InternalFiles.hpp", "OptionsSave.hpp", "Save.hpp", "Equipe.hpp", "Player.hpp", "Attaque.hpp"];
