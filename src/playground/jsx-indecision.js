console.log("App.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Much like flipping a coin',
    options: []
}

const onFormSubmit = (e) => 
{
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
};
const resetOptions = () =>
{
    app.options = [];
    reRender();
}
const decide = () =>
{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const winner = app.options[randomNum];
    alert(winner);
    
}
const appRoot = document.getElementById('app');

const reRender = () =>
{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
                <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>        
                {(app.options) && app.options.map((option) => {return <p key = {app.options.indexOf(option)}>Option {app.options.indexOf(option)+1}: {option}</p>  })}
                <button disabled={app.options.length===0} onClick={decide}>What should I do?</button>
                <button disabled={app.options.length===0} onClick={resetOptions}>Reset</button>
                <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
        </div>
        );


    ReactDOM.render(template, appRoot);
}

reRender();