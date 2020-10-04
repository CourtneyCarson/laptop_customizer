import USCurrencyFormat from './USCurrencyFormat'


export default class CartItem extends Component {

    render() {
        <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
            </div>
        </div>
    }
}
