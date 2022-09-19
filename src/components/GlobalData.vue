<template>
    <div>
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
    </div>
</template>
<script>
      import mix from '@/mixins/mix';
export default {
    mixins: [mix],
    props: {
        confirmed: {
            type: Number,
            default: 0
        },
        deaths: {
            type: Number,
            default: 0
        },
        recovered: {
            type: Number,
            default: 0
        },
        lastupdated: {
            type: String,
            default: ''
        }
    },
    methods: {
            changeDate(date){
      return new Date(date).toLocaleDateString();
    },
    detail(detail){
        this.$router.push({name: 'detail', params: {data: detail}});
    }
    },
}
</script>