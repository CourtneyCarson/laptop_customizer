import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import FeatureItem from '../FeatureItem'


export default class FeatureForm extends Component {
    
    getFeatureItemList = () => {
        return Object.keys(this.props.features).map((feature, idx) => {
            
            const featureHash = feature + '-' + idx; // processor

            return (
                <Featureitem
                    key={featureHash}
                    name={feature}
                    options={this.props}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                />
            );
        });
    }
       
    render() {
        return  (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatureItemList()}
            </form >
        )
    } 
}
    
       
        
        