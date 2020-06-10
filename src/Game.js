import React, { Component } from 'react';
import Card from './Card';
import './Game.css';

class Deck extends Component{
    static defaultProps = {
        deck: ["A-spades", "2-spades", "3-spades", "4-spades", "5-spades", "6-spades", "7-spades", "8-spades", "9-spades", "10-spades", "J-spades", "Q-spades", "K-spades", "A-hearts", "2-hearts", "3-hearts", "4-hearts", "5-hearts", "6-hearts", "7-hearts", "8-hearts", "9-hearts", "10-hearts", "J-hearts", "Q-hearts", "K-hearts", "A-diamonds", "2-diamonds", "3-diamonds", "4-diamonds", "5-diamonds", "6-diamonds", "7-diamonds", "8-diamonds", "9-diamonds", "10-diamonds", "J-diamonds", "Q-diamonds", "K-diamonds", "A-clubs", "2-clubs", "3-clubs", "4-clubs", "5-clubs", "6-clubs", "7-clubs", "8-clubs", "9-clubs", "10-clubs", "J-clubs", "Q-clubs", "K-clubs"]
    }
    constructor(props){
        super(props);
        this.state = {hands: [[...this.props.deck]], handNumber: 0};
        this.selectRandomCard = this.selectRandomCard.bind(this);
        this.dealCards = this.dealCards.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    dealCards(numberOfHands, numberOfCardsToDeal){
        let hands = [];
        let deck = [...this.props.deck];
        for(let i = 0; i < numberOfHands; i++){
            hands.push([]);
        }
        for(let i = 0; i < numberOfCardsToDeal; i++){
            hands[i % numberOfHands].push(...this.selectRandomCard(deck));
        }
        this.setState({hands, deck});
    }
    selectRandomCard(deck){
        let randomIndex = Math.floor(Math.random() * deck.length);
        let randomCard = deck.splice(randomIndex, 1);
        return randomCard;
    }
    handleChange(evt){
        evt.preventDefault();
        this.setState({[evt.target.name]: evt.target.value});
    }
    render(){
        let hands = [this.state.deck, ...this.state.hands];
        console.log(this.state.handNumber);
        let display = this.state.handNumber >= this.state.hands.length || this.state.handNumber === "" ? 
                        <p>No Cards To Display</p> :
                        this.state.hands[this.state.handNumber].map(c => <Card suit={c.split("-")[1]} number={c.split("-")[0]} key={c} playedBy={"Hand Number: " + this.state.handNumber} />)
        return(
            <div className="Game">
                <input 
                    id="handNumber"
                    name="handNumber"
                    value={this.state.handNumber}
                    onChange={this.handleChange}
                />
                <button onClick={() => this.dealCards(5, 50)}>Deal Hand</button>
                <button onClick={() => this.selectRandomCard()}>Get Card</button>
                {display}
            </div>
        )
    }
}

export default Deck;