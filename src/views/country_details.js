const PubSub = require('../helpers/pub_sub')

const CountryDetails = function (container) {
  this.container = container;
};

CountryDetails.prototype.bindEvents = function () {
  PubSub.subscribe('Countries::country-selected', (event) => {
    this.render(event.detail);
  });
};

CountryDetails.prototype.render = function(country) {

  const countryName = this.createTextElement('h2', country.name);
  this.container.appendChild(countryName);

  const flagImage = document.createElement('img');
  flagImage.src = country.flag;
  this.container.appendChild(flagImage);

  const countryCapital = this.createTextElement('p', `Capital: ${country.capital}`);
  this.container.appendChild(countryCapital);

  const countryRegion = this.createTextElement('p', `Region: ${country.region}`);
  this.container.appendChild(countryRegion);

  const languagesListTitle = this.createTextElement('p', 'Languages:');
  this.container.appendChild(languagesListTitle);

  const languagesList = document.createElement('ul');
  this.populateLanguageList(country.languages, languagesList);
  this.container.appendChild(languagesList);

  const currenciesListTitle = this.createTextElement('p', 'Currencies:');
  this.container.appendChild(currenciesListTitle);

  const currenciesList = document.createElement('ul');
  this.populateCurrenciesList(country.currencies, currenciesList);
  this.container.appendChild(currenciesList);

};

CountryDetails.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CountryDetails.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CountryDetails.prototype.populateLanguageList = function (languages, list) {
  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });
};

CountryDetails.prototype.populateCurrenciesList = function (currencies, list) {
  currencies.forEach((currencies) => {
    const listItem = document.createElement('li');
    listItem.textContent = currencies.name;
    list.appendChild(listItem);
  });
};

CountryDetails.prototype.clearCountry = function () {
  this.container.innerHTML = '';
};

module.exports = CountryDetails;
