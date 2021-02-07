var app = new Vue({
    el: '#root',
    data: {
        emailArray: []
    },
    methods: {

    },
    mounted() {
        const self = this;
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(resp) {
                    console.log('la tua mail è ', resp.data.response);
                    const email = resp.data.response;
                    self.emailArray.push(email);
                });
        }

    }
});

Vue.config.devtools = true;