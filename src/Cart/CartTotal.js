import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat';


export default function Cart(props) {
    return (
    <div className="summary__total__value">
        {USCurrencyFormat.format(props.total)}
        </div>
    )
}