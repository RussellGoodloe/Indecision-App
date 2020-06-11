//arguments object is not bound with arrow functions

const add = (a, b) =>
{
    //console.log(arguments); This guy doesn't work in an arrow function
    return a + b;
};
console.log(add(56, 1, 2000));

//'this' keyword is no longer bound
const user = 
{
    name: 'Russell',
    cities: ['Mobile','Tuscaloosa','Bilbao'],
    printPlacesLived()
    {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) =>
        // {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }

};
console.log(user.printPlacesLived());

//Challenge

const multiplier = 
{
    numbers: [1,6,14],
    multiplyBy: 2,
    multiply()
    {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}
console.log(multiplier.multiply());