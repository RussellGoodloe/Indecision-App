'use strict';

var nameVar = 'Russell';
nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Santa';
nameLet = 'Easter Bunny';
console.log('nameLet', nameLet);

var nameConst = 'Buddha';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Clyde';
    return petName;
}
var petName = getPetName();
console.log(petName);
