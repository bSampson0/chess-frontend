<template>
  <div id="app">
    <div class="container">
      <div class="sidenav" v-if="innerWidth > 600">
        <side-nav />
      </div>
      <transition name="fade">
        <main>
          <div class="logo" v-if="innerWidth < 600">
            <img src="/logo.png" alt="Chess Kid Logo">
          </div>
          <router-view />
        </main>
      </transition>
    </div>
    <div class="bottom-nav" v-if="innerWidth < 600">
      <bottom-nav />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideNav from './components/SideNav.vue';
import BottomNav from './components/BottomNav.vue';
import store from './store/index';

export default Vue.extend({
  components: {
    SideNav,
    BottomNav, 
  },
  data() {
    return {
      isDesktop: true,
    }
  },
  computed: {
    innerWidth() {
      return this.$store.state.windowWidth
    }
  },
  created() {
    window.addEventListener('resize', this.onPageResize);
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onPageResize); 
  },

  methods: {
    onPageResize() {
      store.dispatch("updateWindowWidth", window.innerWidth)
    }
  }
})
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
body {
  min-height: 100vh;
}
</style>
