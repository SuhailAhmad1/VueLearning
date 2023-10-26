<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">Toggle Fav</button>
    <br><br>
    <button @click="toggleDetails">
      {{ dataIsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="dataIsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
    <br><br>
    <button @click="deleteFriend(friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dataIsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.dataIsVisible = !this.dataIsVisible;
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.friend.id);
    },
    deleteFriend(friend_id){
      this.$emit('delete-friend',friend_id)
    }
  },
};
</script>