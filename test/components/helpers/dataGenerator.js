
var barDummy = function(n) {
    var data = [], length = n;
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for(var i = 0; i < length; i++) {
        data.push({
            value: getRandomInt(1, 200),
            name: 'Bar ' + i
        });
    }
    return data;
}

module.exports = {
    bar: barDummy
};
