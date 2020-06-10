import React, { Component } from 'react';
import hearts from './media/hearts.jpg';
import diamonds from './media/diamonds.jpg';
import clubs from '././media/clubs.jpg';
import spades from './media/spades.jpg';
import './Card.css';

class Card extends Component {
    render(){
        return(
            <div className="Card">
                <h1>{this.props.number}</h1>
                <img src={this.suitsConvert(this.props.suit)} alt={this.props.suit} />
            </div>
        )
    }
    suitsConvert(suitString){
        switch(suitString){
            case "hearts":
                return hearts;
            case "diamonds":
                return diamonds;
            case "clubs":
                return clubs;
            case "spades":
                return spades;
            default:
                return "";
        }
    }
    getCardImageURL(suit){
        return "" + suit + ".jpg";
    }
}

export default Card;