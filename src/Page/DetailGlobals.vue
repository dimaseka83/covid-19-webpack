<template>
    <v-app>
        <v-container fluid>
            <h1 class="display-2 text-capitalize text-center my-5">data {{ $route.params.data }}</h1>
            <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
            v-if="loading"
          ></v-progress-linear>
            <v-row v-else>
                <v-col cols="12" sm="6" md="4" v-for="(totalData, idx) in totalDataSlice" :key="idx">
                    <v-card elevation="12" rounded="xl" class="text-center">
                        <v-container class="pa-10">
                            <h1 class="display-2">{{ checkNull(totalData.provinceState) }}</h1>
                            <h1 class="headline font-weight-medium my-5 grey--text">{{ checkNull(totalData.countryRegion) }}</h1>
                            <p class="subtitle green--text">Update Terakhir {{ convertDate(totalData.lastUpdate) }}</p>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <p class="font-weight-bold red--text">{{ splitNumber(checkNull(totalData.deaths)) }}</p>
                                    <p class="subtitle font-weight-medium  grey--text">Meninggal</p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p class="font-weight-bold green--text">{{ splitNumber(checkNull(totalData.recovered)) }}</p>
                                    <p class="subtitle font-weight-medium  grey--text">Sembuh</p>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <p class="font-weight-bold amber--text">{{ splitNumber(checkNull(totalData.confirmed)) }}</p>
                                    <p class="subtitle font-weight-medium  grey--text">Terkonfirmasi</p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
        <div class="text-center">
            <v-pagination
            v-model="page"
            :length="lengthPage"
            ></v-pagination>
        </div>
        </v-container>
    </v-app>
</template>
<script>
    import mix from '@/mixins/mix';
import axios from 'axios';
    export default {
        mixins: [mix],
        data() {
            return {
                totalDatas: [],
                page: 1,
                loading: false
            }
        },
        methods: {
            async getData(){
                try {
                    this.loading = true;
                    await axios.get(`${this.api}/${this.$route.params.data}`).then((res) => {
                        this.totalDatas = res.data;
                    });
                    this.loading = false;
                } catch (error) {
                    alert(error);
                }
            },
            checkNull(data) {
                if (data === null) {
                    return '-';
                } else {
                    return data;
                }
            },
            convertDate(date){
                const dateConvert = new Date(date);
                return dateConvert.toLocaleDateString();
            }
        },
        mounted() {
            this.getData();
        },
        computed: {
            totalDataSlice() {
                if(this.totalDatas.length > 0){
                    return this.totalDatas.slice((this.page - 1) * 12, this.page * 12);
                }
                return null;
            },
            lengthPage() {
                if(this.totalDatas.length > 0){
                    return Math.ceil(this.totalDatas.length / 12);
                }
                return null;
            }
        }
    }
</script>