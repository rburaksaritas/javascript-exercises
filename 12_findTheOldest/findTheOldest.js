const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    return people.sort(function(a,b){
        if (!a.yearOfDeath){
            a.yearOfDeath = currentYear;
        } if (!b.yearOfDeath){
            b.yearOfDeath = currentYear;
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        console.log(a.name + ": " + lastGuy + ", " + b.name + ": " + nextGuy);
        return lastGuy > nextGuy ? -1 : 1;
      })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
