import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';


export default class FeatureItemOption extends Component {
  render() {
// add in functions 
    const { itemHash, item, feature } = this.props;
    console.log(item,itemHash,feature)

    return (
     <div key={itemHash} className="feature__item">
       <input
          type="radio"
          id={itemHash}
          className="feature__option"
          name={slugify(feature)}
          checked={item.name === this.state.selected[feature].name}
          onChange={e => this.updateFeature(feature, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    )
  }
}




