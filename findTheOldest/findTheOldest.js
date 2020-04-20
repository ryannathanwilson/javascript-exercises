const findTheOld = function(array) {
    let ages = array.map(person => {
        let ageDate = ((person.yearOfDeath === undefined) ? new Date().getFullYear() : person.yearOfDeath);
        return ageDate - person.yearOfBirth;
    }); 
    let oldestAge = ages.sort().reverse()[0]
    let oldest = array.filter(person => {
        let ageDate = ((person.yearOfDeath === undefined) ? new Date().getFullYear() : person.yearOfDeath);
        return ageDate - person.yearOfBirth == oldestAge});
    return oldest[0];
}

function findTheOldest(array) {
    return (
        array.reduce((oldestPerson,currentPerson) => {
            let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
            let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
            console.log(currentAge,oldestAge);
            
            return oldestAge < currentAge ? currentPerson : oldestPerson;
        }) 
    )
}

function getAge (birth, death) {
    if (!death) {death = new Date().getFullYear()}
    return death - birth;
}


  
module.exports = findTheOldest
