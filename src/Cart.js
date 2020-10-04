const { render } = require("react-dom");


export default class Cart extends Component {

  generateCartItemList = () => {

  return Object.keys(this.props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

  
    const selectedOption = this.state.selected[feature];
  
    return (
      
    );
  });
}  
      const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
  
render() {
  < section className="main__summary" >
    <h2>Your cart</h2>
    {summary}
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    </div>
  </section>
}