<template>
  <div>
    <div class="nav-bottom">
        <a v-for="(item, i) in menuItems" :key="i" :href="item.url" class="nav-bottom__item">
          <img :src="require(`@/assets/icons/${item.icon}`)" alt="Navigation menu icons for Chesskids">
        </a>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  interface IMenuItem {
    name: string;
    icon: string;
    url: string;
    isActive: boolean;
  }

  @Component
  export default class BottomNav extends Vue {
    menuItems: IMenuItem[] = [
      {
        name: "Home",
        url: "/",
        icon: "home-tint.svg",
        isActive: true,
      },
      {
        name: "Play",
        url: "/play",
        icon: "play-chess-tint.svg",
        isActive: false,
      },
      {
        name: "Puzzles",
        url: "/puzzles",
        icon: "puzzles-tint.svg",
        isActive: false,
      },{
        name: "Learn",
        url: "/learn",
        icon: "learn-tint.svg",
        isActive: false,
      },{
        name: "Connect",
        url: "/connect",
        icon: "friends-tint.svg",
        isActive: false,
      }
    ]
  }
</script>

<style lang="scss" scoped>
.nav-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #588F3C;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  &__item {
    flex: 1;
    text-align: center;
     padding: 1.2rem 0;

    &:hover {
      background: rgba(0,0,0,.3);
    }
  }
}
</style>