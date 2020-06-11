class Visibility extends React.Component 
{
    constructor(props) {
        super(props);
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            shown: false
        };
    }
    toggleState () {
        this.setState((prevState) => {
            return {
                shown: !prevState.shown
            }
        });
    };
    render ()
    {
        return (
            <div>
                <h1>The Almighty Detail Hider</h1>
                <h2>The most impressive software in the universe</h2>
                <button onClick={this.toggleState}>{(this.state.shown)? 'Hide details' : 'Show details'}</button>
                <p hidden = {!(this.state.shown)}>the details</p>
            </div>
        );
    }
}
ReactDOM.render(<Visibility />,document.getElementById('app'));