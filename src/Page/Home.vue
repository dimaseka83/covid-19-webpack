<template>
    <v-app>
      <v-container class="my-10">
        <div class="d-flex justify-center">
            <LogoCovid />
        </div>
        <h1 class="display-2 text-center mt-10 font-weight-medium">Informasi tentang COVID-19</h1>
        <h2 class="display-1 text-center mt-5">Stay Home, Stay Safe</h2>
  
        <CountryData :countries="countries"/>
  
        <GlobalData :confirmed="confirmed" :deaths="deaths" :recovered="recovered" :lastupdated="lastupdated"/>
      </v-container>
    </v-app>
  </template>
  
  <script>
import LogoCovid from '@/components/LogoCovid';
  import CountryData from '@/components/CountryData.vue';
  import mix from '@/mixins/mix';
  import axios from 'axios';
import GlobalData from '../components/GlobalData.vue';
  export default {
    mixins: [mix],
    components: {
    LogoCovid,
    CountryData,
    GlobalData
},
    data() {
      return {
        countries: [],
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        lastupdated: '',
      }
    },
  methods: {

    async loadData() {
      try {
        await axios.get(`${this.api}/countries`).then((res) => {
          res.data.countries.map((item) => {
            this.countries.push({
              name: item.name,
              value: item.iso2,
            });
          });
        });
  
        await axios.get(this.api).then((res) => {
          this.confirmed = res.data.confirmed.value;
          this.deaths = res.data.deaths.value;
          this.recovered = res.data.recovered.value;
          this.lastupdated = res.data.lastUpdate;
        });
      } catch (error) {
        alert(error);
      }
    },


  },
  
  mounted() {
    this.loadData();
  },
  
  
  };
  </script>
  