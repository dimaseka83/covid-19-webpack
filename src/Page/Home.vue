<template>
    <v-app>
      <v-container class="my-10">
        <div class="d-flex justify-center">
            <LogoCovid />
        </div>
        <h1 class="display-2 text-center mt-10 font-weight-medium">Informasi tentang COVID-19</h1>
        <h2 class="display-1 text-center mt-5">Stay Home, Stay Safe</h2>
  
        <h1 class="display-1 text-center mt-10 font-weight-medium green--text text-capitalize">Cari data update tiap negara</h1>
        <v-row class="mt-10 d-flex justify-center">
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              v-model="country"
              :items="countries"
              item-text="name"
              item-value="value"
              label="Cari Negara"
              outlined
              dense
              clearable
              @change="getCountryData"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <h1 class="headline text-center mt-10 font-weight-medium green--text text-capitalize">Update Terakhir</h1>
        <v-row class="mt-10 d-flex justify-center">
          <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" outlined color="white" elevation="10" rounded="xl"
            :loading="loading"
            >
            <template slot="progress">
            <v-progress-linear
              color="amber"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
              <v-container>
                <h1 class="display-2 amber--text">{{ splitNumber(confirmedCountry) }}</h1>
                <h1 class="headline font-weight-medium my-5 grey--text">Terkonfirmasi</h1>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" outlined color="white" elevation="10" rounded="xl"
            :loading="loading"
            >
            <template slot="progress">
            <v-progress-linear
              color="red"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
              <v-container>
                <h1 class="display-2 red--text">{{ splitNumber(deathsCountry) }}</h1>
                <h1 class="headline font-weight-medium my-5 grey--text">Meninggal</h1>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" outlined color="white" elevation="10" rounded="xl"
            :loading="loading"
            >
            <template slot="progress">
            <v-progress-linear
              color="green"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
              <v-container>
                <h1 class="display-2 green--text">{{ splitNumber(recoveredCountry) }}</h1>
                <h1 class="headline font-weight-medium my-5 grey--text">Sembuh</h1>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
  
        <h2 class="display-1 text-center mt-16 text-capitalize">total kasus secara global</h2>
        <h1 class="headline text-center mt-10 font-weight-medium green--text text-capitalize">Update Terakhir : {{ changeDate(lastupdated) }}</h1>
        <v-row class="mt-10 d-flex justify-center">
          <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" outlined color="white" elevation="10" rounded="xl"
            >
              <v-container>
                <h1 class="display-2 amber--text">{{ splitNumber(confirmed) }}</h1>
                <h1 class="headline font-weight-medium my-5 grey--text">Terkonfirmasi</h1>
                <v-hover v-slot="{hover}">
                    <a class="subtitle black--text" @click="detail('confirmed')" :class="{ 'blue--text': hover }"
                    >Detail</a>
                </v-hover>
                
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" outlined color="white" elevation="10" rounded="xl"
            >
              <v-container>
                <h1 class="display-2 red--text">{{ splitNumber(deaths) }}</h1>
                <h1 class="headline font-weight-medium my-5 grey--text">Meninggal</h1>
                <v-hover v-slot="{hover}">
                    <a class="subtitle black--text" @click="detail('deaths')" :class="{ 'blue--text': hover }"
                    >Detail</a>
                </v-hover>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card class="text-center" outlined color="white" elevation="10" rounded="xl"
            >
              <v-container>
                <h1 class="display-2 green--text">{{ splitNumber(recovered) }}</h1>
                <h1 class="headline font-weight-medium my-5 grey--text">Sembuh</h1>
                <v-hover v-slot="{hover}">
                    <a class="subtitle black--text" @click="detail('recovered')" :class="{ 'blue--text': hover }"
                    >Detail</a>
                </v-hover>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  import LogoCovid from '@/components/LogoCovid';
  import mix from '@/mixins/mix';
  import axios from 'axios';
  export default {
    mixins: [mix],
    components: {
      LogoCovid,
    },
    data() {
      return {
        countries: [],
        country: null,
        loading: false,
        confirmedCountry: 0,
        deathsCountry: 0,
        recoveredCountry: 0,
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        lastupdated: '',
      }
    },
  methods: {
    async getCountryData(){
      try {
        if(this.country != null){
          this.loading = true;
          await axios.get(`${this.api}/countries/${this.country}`).then((res) => {
          this.confirmedCountry = res.data.confirmed.value;
          this.deathsCountry = res.data.deaths.value;
          this.recoveredCountry = res.data.recovered.value;
          this.loading = false;
        });
        }
      } catch (error) {
        console.log(error);
      }
    },
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
        console.log(error);
      }
    },

    changeDate(date){
      return new Date(date).toLocaleDateString();
    },
    detail(detail){
        this.$router.push({name: 'detail', params: {data: detail}});
    }
  },
  
  mounted() {
    this.loadData();
  },
  
  
  };
  </script>
  