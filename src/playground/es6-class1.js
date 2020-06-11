class Person
{
   constructor(name = 'Anonymous', age = 0) 
   {
       this.name = name;
       this.age = age;
   }
   getGreeting()
   {
       return `Hola! Me llamo es ${this.name}!`;
   }
   getDesc()
   {
       return `Hola! Me llamo is ${this.name} y hace ${this.age} anos.`;
   }
}

class Student extends Person
{
    constructor(name, age, major)
    {
        super();
        this.major = major;
    }
    hasMajor()
    {
        return !!this.major;
    }
    getDesc()
    {
        let description = super.getDesc();
        if (this.hasMajor())
        {
            description += ` Yo estudio ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person
{
    constructor(name, age, homeLocation)
    {
        super();
        this.homeLocation = homeLocation;
    }
    hasHome()
    {
        return !!this.homeLocation;
    }
    getGreeting()
    {
        let greeting = super.getGreeting();
        if (this.hasHome())
        {
            greeting += ` Estoy visitando ${this.homeLocation}!`;
        }
        return greeting;
    }
}

const me = new Traveller('Russell Goodloe', 21, 'Thailand');
console.log(me.getGreeting());
console.log(me.hasHome());

const test = new Traveller();
console.log(test.getGreeting());
console.log(test.hasHome());
