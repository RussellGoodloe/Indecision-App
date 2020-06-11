let detailsShown = false;

const toggleDetails = () => 
{
    detailsShown = !detailsShown;
    renderWindow();
}

const renderWindow = () =>
{
    const template = 
    (
        <div>
            <h1>The Allmighty Visibility Toggle</h1>
            <h2>Tremble before it!</h2>
            <button onClick={toggleDetails}>{detailsShown ? 'Hide details' :'Show details'}</button>
            <p hidden={!detailsShown}>Welcome traveler. These are the coveted details.</p>
        </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
    console.log("rerendered")
}

renderWindow();
