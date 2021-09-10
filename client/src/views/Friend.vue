<template>
  <div>
    <friend-card 
      :firstName="friend.firstName"
      :lastName="friend.lastName"
      :gender="friend.gender"
      :email="friend.email"
      :avatar="friend.avatar"
      :birthday="friend.birthday"
      :gamesCount="friend.gamesCount"
      :bio="friend.bio"
      :isAdmin="friend.isAdmin"
      :id="friend.id"
    />
  </div>
</template>

<script lang="ts">
import FriendCard from '../components/FriendCard.vue';

export default {
components: { FriendCard },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  async created() {
    await this.$store.dispatch("getFriends")
    this.$store.dispatch("updateCurrentFriend", this.id)
  },
  computed: {
    friend() {
      return this.$store.state.currentFriend
    }
  }
}
</script>

<style scoped>

</style>