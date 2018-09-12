const PubSub = require('../helpers/pub_sub');

const CountrySelect = function(element){
  this.element = element;
};

CountrySelect.prototype.bindEvents = function(){
  PubSub.subscribe('Countries::countries-loaded', (event) => {
    const allCounrties = event.detail;
    this.populate(allCounrties);
  });
  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('CountrySelect::change', selectedIndex);
  });
}

CountrySelect.prototype.populate = function(countriesData){
    countriesData.forEach((country, index) => {
      const option = document.createElement('option');
      option.textContent = country.name;
      option.value = index;
      this.element.appendChild(option);
    });
}

module.exports = CountrySelect;
