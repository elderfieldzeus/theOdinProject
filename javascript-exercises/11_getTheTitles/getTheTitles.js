const getTheTitles = function(obj) {
    let titles = [];
    for(let i = 0; i < obj.length; i++){
        titles[i] = obj[i].title;
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
