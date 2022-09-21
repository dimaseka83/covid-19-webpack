import axios from 'axios';

class Country {
  constructor() {
    this.select = document.querySelector('#country-select');
    this.confirmed = document.querySelector('#confirmed');
    this.recovered = document.querySelector('#recovered');
    this.deaths = document.querySelector('#deaths');
    this.url = 'https://covid19.mathdro.id/api/countries';
    this.init();
  }

  init() {
    this.getCountry();
    this.select.addEventListener('change', this.selectCountry.bind(this));
  }

  async getCountry() {
    try {
      await axios.get(this.url).then((response) => {
        const { data } = response;
        const { countries } = data;
        countries.forEach((country) => {
          const option = document.createElement('option');
          option.value = country.name;
          option.innerHTML = country.name;
          this.select.appendChild(option);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  async selectCountry() {
    const country = this.select.options[this.select.selectedIndex].value;
    const url = `https://covid19.mathdro.id/api/countries/${country}`;
    try {
      await axios.get(url).then((response) => {
        const { data } = response;
        this.confirmed.innerHTML = data.confirmed.value;
        this.recovered.innerHTML = data.recovered.value;
        this.deaths.innerHTML = data.deaths.value;
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { Country };
