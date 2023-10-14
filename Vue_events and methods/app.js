const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: ""
        }
    },
    methods: {
        add(){
            this.counter++;
        },
        remove(){
            this.counter--;
        },
        reset(){
            this.message = ""
        }
    }
});
app.mount("#app")