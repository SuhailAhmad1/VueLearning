<template>
    <h1>Component Practice Application</h1>
    <div id="container">
        <div id="div1">
            <active-user 
            :user="user"
            ></active-user>
        </div>
       <br>
        <div id="div2">
            <user-data @add-user="addUser"></user-data>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            user: {
                "username": "Suhail",
                "age": 18
                }
        }
    },
    methods:{
        addUser(username, age){
            this.user.username = username;
            this.user.age = age;
        }
    }
}
</script>

<style>
body{
    background: linear-gradient(90deg,rgb(37, 33, 33), rgb(73, 67, 67));
}
h1{
    text-align: center;
    color:aliceblue
}
section{
    margin: auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    align-content: center;
    text-align: center;
    color: antiquewhite;
}
</style>