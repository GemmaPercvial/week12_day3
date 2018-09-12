const PubSub = require('../helpers/pub_sub')
const Request = require('../helpers/request')

const Countries = function(){
  this.text = null;
}

Countries.prototype.getData = function(){
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    PubSub.publish('Countries::countries-loaded', this.text);
  });
  PubSub.subscribe('CountrySelect::change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryDetail(selectedIndex);
  })
}

Countries.prototype.publishCountryDetail = function (countryIndex){
  const selectedCountry = this.text[countryIndex];
  PubSub.publish('Countries::country-selected', selectedCountry)
};

module.exports = Countries;
