app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        addFive(){
            this.result+=5;
        },
        addOne(){
            this.result+=1;
        }
    },
    watch:{
        finalResult() {
            console.log('Watcher executing...');
            const that = this;
            setTimeout(function() {
              that.result = 0;
            }, 5000);
        },
    },
    computed: {
        finalResult(){
            if (this.result < 37){
                return "Not there yet";
            }
            else if(this.result > 37){
                return "Too much";
            }
            else{
                return this.result;
            }
        }
    }
});

app.mount('#assignment')