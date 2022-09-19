<template>
<div>
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
</div>
</template>
<script>
import axios from 'axios';
  import mix from '@/mixins/mix';
  
export default {
    mixins: [mix],
    props: {
        countries: {
            type: Array,
            required: true
        },
    },
    data() {
        return {
            loading: false,
            country: null,
                confirmedCountry: 0,
        deathsCountry: 0,
        recoveredCountry: 0,
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
    },
}
</script>