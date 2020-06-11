var nameVar = 'Russell';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Santa';
nameLet = 'Easter Bunny';
console.log('nameLet', nameLet);

const nameConst = 'Buddha';
console.log('nameConst' , nameConst)

function getPetName()
{
    var petName = 'Clyde';
    return petName;
}
const petName = getPetName();
console.log(petName);

//block scoping
var fullName = 'Frank Sinatra';

if (fullName)
{
    var firstName = fullName.split(' ')[0];
    var lastName = fullName.split(' ')[1];
    console.log(firstName);
}
console.log(lastName);

const fullName2 = 'George Orwell';
let lastName2;

if (fullName2)
{
    const firstName2 = fullName2.split(' ')[0];
    let lastName2 = fullName2.split(' ')[1];
    console.log(firstName2);
    console.log(lastName2);
}
//console.log(firstName2);
console.log(lastName2);