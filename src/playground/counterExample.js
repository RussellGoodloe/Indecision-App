let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}
const square = () =>{
    count = count*count;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => 
{
    const template2 = 
    (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={square}>square</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);
}

renderCounterApp();