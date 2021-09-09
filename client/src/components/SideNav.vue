<template>
  <div class="nav">
    <div class="nav-wrapper">
      <div class="btn-group" v-for="(item, i) in menuItems" :key="i">
        <a class="btn" :class="{ active: item.isActive }" @click="item.isActive = !item.isActive" :href="item.url">
          <span class="icon">
            <img :src="require(`@/assets/icons/${item.icon}`)" height="30px;" alt="Navigation Icons">
          </span>
          <span class="text">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
    <div class="nav-logo">
      <img src="/logo.png" alt="Chess Kid Logo">
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
  export default class SideNav extends Vue {
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
.nav-wrapper {
  background: rgba(0,0,0,.1);
  border-radius: 15px;
  padding: .5em;
  width: 21rem;
}

a, 
a:hover {
  text-decoration: none;
  color: #fff;
}

.btn {
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  padding: 1rem 0rem .75rem 1.5rem;
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
}

.active {
  background: #62A043;
}

.btn:hover {
  background: #62A043;
}

.btn .text {
  font-size: 1.6rem;
  margin-left: 1.5rem;
}
.nav-logo {
  margin-top: 1rem;
  text-align: center;
}
</style>