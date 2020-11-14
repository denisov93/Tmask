import React,{Component} from 'react';
import PropTypes from 'prop-types'
import OneCard from 'components/OneCard'

class Cards extends Component{
  render() {
    return this.props.cards.map(
      (card)=>(
      
        <OneCard key={card.id} card={card}/>
      
      )
    );
  }  
}

Cards.propTypes = {
  cards : PropTypes.array.isRequired
}
export default Cards