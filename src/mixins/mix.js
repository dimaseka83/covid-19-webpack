export default {
    data() {
        return {
            api : 'https://covid19.mathdro.id/api'
        }
    },
    methods: {
        splitNumber(number){
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
    },
}