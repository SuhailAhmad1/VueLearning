<template>
    <section>
        <h2>Username : {{user.username}}</h2>
        <h3>Age : {{user.age}}</h3>
    </section>
</template>

<script>
    export default{
        props:["user"]
    }
</script>

<style>
</style>