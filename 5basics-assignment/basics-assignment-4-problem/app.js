app = Vue.createApp({
    data(){
        return{
            user: "",
            classA: false,
            classB: false,
            toggle: false,
            userColor: ""
        }
    },
    watch: {
        user(value){
            if (value === "user1"){
                this.classA= true
            }
            else if (value == "user2"){
                this.classB = true
            }
            else{
                this.classA = false;
                this.classB = false
            }
       }
    },
    methods: {
        toggleVisibility(){
            this.toggle = !this.toggle;
        }
    }
})

app.mount("#assignment")