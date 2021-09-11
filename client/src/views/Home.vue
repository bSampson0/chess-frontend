<template>
  <div class="home">
    <div class="main">
        <div class="input-search">
          <form>
            <fieldset class="search">
              <span class="search__icon"><img width="20" alt="Magnifying glass icon" src="../assets/icons/search-icon-white.svg"></span>
              <input class="search__input" v-model="input" type="text" required>
              <div class="search__label">Filter Friends...</div>
            </fieldset>
          </form>
        </div>
      <div class="friends-text">
        Friends
      </div>
      <div class="friend-cards" v-for="friend in friends" :key="friend.id">
        <dropdown-card
          :avatar="friend.avatar"
          :firstName="friend.firstName"
          :lastName="friend.lastName"
          :gamesCount="friend.gamesCount"
          :bio="friend.bio"
          :birthday="friend.birthday"
          :id="friend.id"
        />
      </div>
      <div class="pagination" v-if="input == ''">
        <Pagination />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DropdownCard from "../components/DropdownCard.vue";
import Pagination from '../components/Pagination.vue';
import store from '../store/index';

export default {
  components: {
    DropdownCard,
    Pagination
  },
  data() {
    return {
      data: null,
      input: ''
    }
  },
  computed: {
    friends() {
      if (this.input === '') {
        return store.state.visibleFriends
      }
      return store.state.friends.filter((friend) => {
        return (friend.firstName.toLowerCase().includes(this.input.toLowerCase()) || friend.lastName.toLowerCase().includes(this.input.toLowerCase()))
      })
    },
  },
  async created() {
    await store.dispatch("getFriends")
    await store.dispatch("updateVisibleFriends")
  },
}

</script>

<style lang="scss">
</style>
