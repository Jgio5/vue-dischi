var app = new Vue({
    el: "#app",
    data: {
        mySongs : []
    },
    mounted() {  
        axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(result => {
            result.data.response.forEach(element => {
                this.mySongs.push(element);
            });
        });
    }
});

Vue.config.devtools = true