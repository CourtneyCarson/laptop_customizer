// to convert numbers into US dollars
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
  
export default USCurrencyFormat;
