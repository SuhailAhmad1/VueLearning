const app = Vue.createApp({
    data(){
        return {
            task: "",
            total_tasks : []
        }
    },
    methods: {
        addTask(){
            this.total_tasks.push(this.task)
            this.task = ""
        },
        removeTask(index){
            this.total_tasks.splice(index, 1)
        }
    }
});

app.mount("#app")