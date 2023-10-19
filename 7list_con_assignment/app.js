const app = Vue.createApp({
    data(){
        return {
            currentTask : "",
            taskList : [],
            toDisplay: true,
        }
    },
    computed: {
        buttonText(){
            return this.toDisplay ? "Hide List": "Show List";
        }
    },
    methods: {
        addTask(){
            this.taskList.push(this.currentTask)
            this.currentTask = ""
        },
        toggleDisplay(){
            this.toDisplay = !this.toDisplay
        }
    }
})

app.mount("#assignment")