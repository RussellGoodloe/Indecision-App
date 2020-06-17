import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component
{
    constructor (props) 
    {
        super(props);
        this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    //this one must be named this, like constructor
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }  
        } catch (e) {
            //Momma didn't raise no snitch, I aint doin nothin
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }
    componentWillUnmount() {
        console.log('will unmount');
    }
    handleDeleteOptions() {

        this.setState(()  => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const winner = this.state.options[randomNum];
        alert(winner);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)  => ({ options: prevState.options.concat([option]) }));
    }
    render() {
        const subtitle = 'Are you too spineless to decide? Let me!'

        return (
        <div>
            <Header subtitle = {subtitle}/>
            <Options 
                options = {this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption = {this.handleAddOption}
            />
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
        </div>
        );
    }
}
export default IndecisionApp;