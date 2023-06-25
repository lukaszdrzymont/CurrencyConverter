//let amount = document.querySelector('.input-amount')
//let currencies = documnet.querySelector('.currency-to')




const getDataAboutCurrencies = async () => {
    const response = await fetch('https://api.currencyapi.com/v3/latest?apikey=NwPxuU1NSzzaWSIj6jywLTySsGwpHEGAtnirwZU0&base_currency=EUR');
    const jsonDataAboutCurrencies = await response.json();
    return jsonDataAboutCurrencies;
};
const showDataAboutCurrencies = async () => {
    const data = await getDataAboutCurrencies();
    console.log(data)
}

//showDataAboutCurrencies()