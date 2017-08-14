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


var files = [main, null];
