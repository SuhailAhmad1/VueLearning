<template>
    <section>
        <form @submit.prevent="addUser">
            <div>
                <label for="username">Username : </label>
                <input type="text" id="username" v-model="username">
            </div>
            <div>
                <label for="age">Age : </label>
                <input type="text" id="age" v-model="age">
            </div>
            <button type="submit">Add User</button>
        </form>
    </section>
    
</template>

<script>
    export default{
        data(){
            return{
                username: "",
                age: ""
            }
        },
        methods:{
            addUser(){
                this.$emit('add-user',this.username, this.age)
            }
        }
    }
</script>