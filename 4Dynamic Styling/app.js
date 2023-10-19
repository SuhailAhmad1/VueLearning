app = Vue.createApp({
    data(){
        return {
            selectedA: false,
            selectedB: false,
            selectedC: false
        }
    },
    methods: {
        selectDiv(div){
            if (div==="A"){
                this.selectedA = !this.selectedA;
            }
            else if (div==="B"){
                this.selectedB = !this.selectedB;
            }
            else if (div==="C"){
                this.selectedC = !this.selectedC;
            }
        }
    }
});

app.mount("#app")