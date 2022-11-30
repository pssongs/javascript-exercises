const findTheOldest = function(array) {
  let result = array.reduce((oldest, currentPerson) => {
    let oldestAge = getAge(oldest.yearOfBirth , oldest.yearOfDeath)
    let currentAge = getAge(currentPerson.yearOfBirth , currentPerson.yearOfDeath)
    return oldestAge > currentAge ? oldest : currentPerson
  })
  return result
};

const getAge = function(yearOfBirth,yearOfDeath) {
  if (!yearOfDeath){
    yearOfDeath = new Date().getFullYear()
  }
  return (yearOfDeath-yearOfBirth)
}


// Do not edit below this line
module.exports = findTheOldest;
