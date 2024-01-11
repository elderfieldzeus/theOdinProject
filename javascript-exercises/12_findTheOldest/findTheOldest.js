const findTheOldest = function(obj) {
    let max = 0, current, maxPosition = 0;
    for(let i = 0; i < obj.length; i++){
        current = yearOfDeath ? obj[i].yearOfDeath - obj[i].yearOfBirth : 2024 - obj[i].yearOfBirth;

        console.log(obj[i].yearOfDeath);
        if(current > max){
            maxPosition = i;
            max = current;
        }
    }
    return obj[maxPosition];
};

// Do not edit below this line
module.exports = findTheOldest;


const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people).name);
