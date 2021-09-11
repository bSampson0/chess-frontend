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
          <a class="btn btn-rounded" :href="id - 1" v-if="id > 1">&#60;</a>
        </div>
        <div class="next">
          <a class="btn btn-rounded" :href="id + 1" v-if="id < totalFriends">></a>
        </div>
    </div>
    </div>
    <a href="/" class="btn btn-primary">Go Back</a>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';
  import store from '../store/index';

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
@import "../assets/sass/components/friend-card";

</style>