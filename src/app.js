const Countries = require('./models/countries');
const CountrySelect = require('./views/country_select');
const CountryDetails = require('./views/country_details');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countries = new Countries();
    countries.getData();
  const countriesDropdown = document.querySelector('select#countries')

  const countrySelect = new CountrySelect(countriesDropdown);
    countrySelect.bindEvents();

  const countryContainer = document.querySelector('div#country');
    const counrtyDetails = new CountryDetails(countryContainer);
    counrtyDetails.bindEvents();
});
