function pigLatin(string) {
    return string.split(" ").map(element =>
        piggify(element)).join(" ");
};

function piggify(string) {
    const index = identifyConsonant(string);
	const beginning = string.slice(0, index);
	const ending = string.slice(index);
	return `${ending}${beginning}ay`

}

function identifyConsonant(string){
    const vowels = string.toLowerCase().match(/[aeiou]/)
    if (vowels[0] == "u" && string[string.indexOf(vowels[0]) - 1] == "q"){
        return string.indexOf(vowels[0])+1
    }

    return string.indexOf(vowels)
}
// Do not edit below this line
module.exports = pigLatin;
