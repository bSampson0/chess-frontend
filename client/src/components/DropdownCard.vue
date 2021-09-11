<template>
  <div class="drop-card">
    <div class="drop-card__avatar">
      <a :href="`friend/${id}`">
        <img :src="avatar" alt="Friend avatar" class="avatar-img">
      </a>
    </div>
    <div class="drop-card__text-box">
      <div class="text-box__title">
        <a :href="`friend/${id}`">{{ fullName }}</a>
      </div>
      <span class="text-box__bday">
        <strong>Birthday: </strong>{{ birthdate }},
      </span>
      <span class="text-box__games-played">
        <strong>games: </strong>{{ gamesCount }}
      </span>
      <div class="drop-card__main" v-if="!hide">
        {{ bio }}
      </div>
    </div>
    <div class="drop-card__actions" v-if="windowWidth > 600">
      <div class="drop-card__icon" @click="hide = !hide">
        <img src="../assets/icons/dropdown-arrow-white.svg" alt="dropdown icon" class="dropdown-icon" :class="{ flip: !hide }">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import store from '../store/index';

  @Component
  export default class FriendsCard extends Vue {
    // props
    @Prop({default: "Bob"}) firstName: string;
    @Prop({default: "Ross"}) lastName: string;
    @Prop() avatar: string;
    @Prop({default: "10/27/1858"}) birthday: string;
    @Prop({default: 122}) gamesCount: number;
    @Prop({default: "Let's paint happy trees!"}) bio: string;
    @Prop({default: true}) hide: boolean;
    @Prop() id: number;

    // computed properties
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

    get windowWidth(): number {
      return store.state.windowWidth
    }

  }

</script>

<style lang="scss" scoped>

</style>