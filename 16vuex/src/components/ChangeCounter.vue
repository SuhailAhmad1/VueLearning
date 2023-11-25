<template>
    <button @click="addOne">Add 25 using actions</button>
</template>

<script>
export default {
    methods: {
        addOne(){
            this.$store.dispatch('increment', {value: 25});
        }
    }
}
</script>