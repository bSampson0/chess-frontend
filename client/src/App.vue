<template>
  <div id="app">
    <div class="container">
      <div class="sidenav" v-if="innerWidth > 600">
        <side-nav />
      </div>
      <main>
        <router-view />
        <Pagination />
      </main>
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
import Pagination from './components/Pagination.vue';

export default Vue.extend({
  components: {
    SideNav,
    BottomNav, 
    Pagination
  },
  data() {
    return {
      isDesktop: true,
      innerWidth: window.innerWidth
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
      this.innerWidth = window.innerWidth
    }
  }
})
</script>

<style lang="scss">
@import "./assets/sass/main.scss";


</style>
