const PubSub = require('../helpers/pub_sub')

const CountryDetails = function(container){
  this.container = container;
};

CountryDetails.prototype.bindEvents = function(){
  PubSub.subscribe('Countries::country-selected', (event) => {
    const details = event.detail;
    this.render(details);
  });
};

CountryDetails.prototype.render = function(country) {
  this.container.innerHTML = '';

  const countryName = this.createElement('h3');
  countryName.textContent = country.name
  this.container.appendChild(countryName);

  const countryCapital = this.createElement('p');
  countryCapital.textContent = `Capital: ${country.capital}`
  this.container.appendChild(countryCapital);

  const countryRegion = this.createElement('p');
  countryRegion.textContent = `Region: ${country.region}`
  this.container.appendChild(countryRegion);

  const countryCurrencies = this.createLi('li');
  countryCurrencies.textContent = (`Currencies: ${country.currencies}`, infoList)
  this.container.appendChild(countryCurrencies);

  const countryLanguages = this.createLi('li');
  countryLanguages.textContent = (`Languages: ${country.languages}`, infoList)
  this.container.appendChild(countryLanguages);
};

CountryDetails.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CountryDetails.prototype.createLi = function(textContent, ul) {
  const li = document.createElement('li');
  li.textContent = textContent;
  ul.appendChild(li);
};

module.exports = CountryDetails;
