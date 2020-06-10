console.log("App.js is running");

//actual indecision template plus object
var contents = {
    title: 'Indecision App',
    subtitle: 'Just like flipping a coin',
    options: ['Heads','Tails']
}
var template = (
    <div>
        <h1>{contents.title}</h1>
        {contents.subtitle && <p>{contents.subtitle}</p>}
        {(contents.options && contents.options.length > 0) ? <p>Here are your options: {contents.options[0] + ' ' + contents.options[1]}</p> : <p>No options</p>}

        <ol>
            <li>ignore what's below here</li>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ol>
    </div>
    );

//template 2 and its object/s
var user = 
{
    name: 'Russell',
    age: '21',
    location: 'Mobile'
}    
var user2 =
{
    name: 'Francisco',
    
}

function getLocation(location) 
{
    if (location)
    {
        return <p>Location: {location}</p>;
    }
}
var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
    );

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);