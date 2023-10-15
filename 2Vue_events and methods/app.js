const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: "",
            full_message: ""
        }
    },
    watch: {
        message(Value){
            if (Value == ""){
                this.full_message = ""
            }
            else{
                this.full_message = Value + " ---->  Message by Suhail";
            }
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