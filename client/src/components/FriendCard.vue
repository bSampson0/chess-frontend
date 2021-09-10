<template>
  <div>
    <div class="card">
      <div class="card__banner">
        <div class="top">
          <div class="avatar">
            <img :src="avatar" alt="Friend Avatar for Chesskid.com">
            <span class="name lucky-font">{{ fullName }}</span>
          </div>
        </div>

        <div class="bottom">
          <span class="bday">
            <span class="lucky-font">Birthday: </span>{{birthdate}}
          </span>
          <span class="email">
            <span class="lucky-font">Email: </span>{{email}}
          </span>
          <div class="gender">
            <span class="lucky-font">Gender</span> {{gender}}
          </div>
          <div class="games">
            <span class="lucky-font">Games Played:</span> {{gamesCount}}
          </div>
        </div>
      </div>
      <div class="card__body">
        <div class="bio">
          <span class="lucky-font">Bio: </span> {{bio}}
        </div>
      </div>
      <div class="actions">
      <div class="previous">
        <a class="btn" :href="id - 1" v-if="id > 1">Previous Friend</a>
      </div>
      <div class="go-back">
        <a class="btn" href="/">View All Friends</a>
      </div>
      <div class="next">
        <a class="btn" :href="id + 1" v-if="id < totalFriends">Next Friend</a>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import store from '../store/index'

  @Component
  export default class FriendCard extends Vue {

    @Prop({default: "Bob"}) firstName: string;
    @Prop({default: "Ross"}) lastName: string;
    @Prop({default: "male"}) gender: string;
    @Prop({default: "bob@painting.com"}) email: string;
    @Prop() avatar: string;
    @Prop({default: "10/27/1858"}) birthday: string;
    @Prop({default: 122}) gamesCount: number;
    @Prop({default: "Let's paint happy trees!"}) bio: string;
    @Prop({default: false}) isAdmin: boolean;
    @Prop() id: number;

    get fullName(): string {
      return this.firstName+ ' '+ this.lastName
    }
    get birthdate(): string {
      let date = new Date(parseInt(this.birthday)),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()
      let formattedBirthday = `${month}/${day}/${year}`
      return formattedBirthday
    }

    get totalFriends(): number {
      return store.state.friends.length
    }
    
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

a {
  text-decoration: none;
  color: inherit;
}

.card {
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,.1);
  border-radius: 15px;
  
  &__banner {
    border-radius: inherit;
    background: #333;
    padding: 2rem;
  }
  
  &__body {
    padding: 2rem;
  }
}

.top {
  margin-bottom: 10px;
}

.avatar img {
  height: 50px;
}

.lucky-font {
  font-family: 'Luckiest Guy', cursive;
  font-display: 1px;
  color: #ffe205;
}

.name {
  font-size: 3rem;
}

.actions {
  display: flex;
  justify-content: center;
  padding: 2rem 0rem;
  border-radius: 1rem;
  color: #fff;

}

.btn {
  border: 1px solid;
  margin: 2px;
  padding: 5px 10px;
  text-decoration: none;
  transition: all .2s;
  border-radius: 5px;
  text-overflow: inherit;
}

.btn:hover {
  color: #333;
  background: #fff;
}


</style>