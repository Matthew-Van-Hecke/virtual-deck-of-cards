import React, { Component } from 'react';
import './JoinGameForm.css';

class EntryPoint extends Component{
    constructor(props){
        super(props);
        this.state = {playerName: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value})
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addPlayer(this.state);
        this.setState({playerName: ""});
    }

    render(){
        return(
            <form className="JoinGameForm" onSubmit={this.handleSubmit}>
            <label htmlFor="playerNumber"></label>
            {/* <input 
                type="text"
                name="playerNumber"
                id="playerNumber"
                onChange={this.handleChange}
                value={this.state.playerNumber}
            /> */}
            <input 
                type="text"
                name="playerName"
                id="playerName"
                onChange={this.handleChange}
                value={this.state.playerName}
            />
            <button>Join</button>
        </form>
        )
    }
}

export default EntryPoint;