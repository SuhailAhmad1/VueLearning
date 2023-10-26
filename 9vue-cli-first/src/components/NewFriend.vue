<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name : </label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="phone">Phone : </label>
      <input type="text" id="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email : </label>
      <input type="text" id="email" v-model="email" />
    </div>
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.name, this.phone, this.email);
      this.name = "";
      this.phone = "";
      this.email = "";
      alert("New Friend Added")
    },
  },
};
</script>
