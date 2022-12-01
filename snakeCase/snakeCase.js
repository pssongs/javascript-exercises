const snakeCase = function(string) {
    if(isCamelCase(string.trim())){
        return camelify(string)
    } 
    
    return isDouble(string.split("").map(letter => {
        if(!!letter.toLowerCase().match(/[^a-z]/)){
            return  "_"
        } return letter
    }).join("").toLowerCase())
    
};

const isCamelCase = function(word){
    //checking for punctuations/space, capital first letter, and consecutive capital letters
    if (!!word.toLowerCase().match(/[^a-z]/) || !!word[0].match(/[A-Z]/) || !!word.match(/[A-Z]{2,}/)){
        return false
    } 

    //then if there is capital, it must be a camel case
    if (!!word.match(/[^A-Z]/)){
        return true
    } 

    return false

    
}

const camelify = function(word){
    let index = []
    let letter = word.split("")

    for (let i = 0; i < letter.length; i++){
        if(letter[i].match(/[A-Z]/)){
            index.push("_")
            index.push(letter[i])
        } else {index.push(letter[i])}
    }
    return index.join("").toLowerCase()
}

const isDouble = function(word){
    let result = word.split("")
    
    for (let i = 0; i < result.length; i++){
        if((result[i] == "_") && (result[i+1] == "_")){
            result[i] = ""
        }
    }
    if(result[result.length-1] == "_"){
        result[result.length-1] = ""
    }
    return result.join("")
}




// Do not edit below this line
module.exports = snakeCase;
