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
        <friends-card
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
import FriendsCard from "../components/FriendsCard.vue";
import Pagination from '../components/Pagination.vue';
import store from '../store/index';

export default {
  components: {
    FriendsCard,
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
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');


.friends-text {
  font-family: 'Luckiest Guy', cursive;
  padding: 2rem;
  font-size: 3.5rem;
  letter-spacing: 1.1px;
}

.search {
  display: flex;
  border: none;
  outline: none;
  position: relative;
  border-radius: 1.5rem;
  background: rgba(0,0,0,.1);
  padding: 1.5rem;
  box-sizing: border-box;
  letter-spacing: 1px;
  margin-bottom: 2rem;

  &__icon {
    cursor: pointer;
  }
  
  &__input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.5rem;
    background: transparent;
    margin-left: 20px;
    letter-spacing: 1.1px;
    color: #fff;
    z-index: 2;
  }
  
  &__input:focus+.search__label,
  &__input:valid+.search__label {
    top: -18px;
    font-size: 1.2rem;
  }
  
  
  &__label {
    opacity: 0.5;
    position: absolute;
    top: 1.7rem;
    left: 6rem;
    transition: all 0.2s ease;
    font-size: 1.5rem;
    color: #f8f8f8;
    z-index: 1;
  }
}
</style>
