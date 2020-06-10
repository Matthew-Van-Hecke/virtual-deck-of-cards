import React, { Component } from 'react';
import Card from './Card';
import './Game.css';

class Deck extends Component{
    static defaultProps = {
        deck: ["A-spades", "2-spades", "3-spades", "4-spades", "5-spades", "6-spades", "7-spades", "8-spades", "9-spades", "10-spades", "J-spades", "Q-spades", "K-spades", "A-hearts", "2-hearts", "3-hearts", "4-hearts", "5-hearts", "6-hearts", "7-hearts", "8-hearts", "9-hearts", "10-hearts", "J-hearts", "Q-hearts", "K-hearts", "A-diamonds", "2-diamonds", "3-diamonds", "4-diamonds", "5-diamonds", "6-diamonds", "7-diamonds", "8-diamonds", "9-diamonds", "10-diamonds", "J-diamonds", "Q-diamonds", "K-diamonds", "A-clubs", "2-clubs", "3-clubs", "4-clubs", "5-clubs", "6-clubs", "7-clubs", "8-clubs", "9-clubs", "10-clubs", "J-clubs", "Q-clubs", "K-clubs"]
    }
    constructor(props){
        super(props);
        this.state = {deck: this.props.deck, hands: []};
        this.selectRandomCard = this.selectRandomCard.bind(this);
    }
    selectRandomCard(){
        let deck = [...this.state.deck];
        let randomIndex = Math.floor(Math.random() * deck.length);
        let randomCard = deck.splice(randomIndex, 1);
        this.setState({deck});
        return randomCard;
    }
    render(){
        return(
            <div className="Game">
                <button onClick={() => console.log(this.selectRandomCard())}>Get Card</button>
                {this.state.deck.map(c => <Card suit={c.split("-")[1]} number={c.split("-")[0]} key={c} playedBy="Matthew" />)}
            </div>
        )
    }
}

export default Deck;