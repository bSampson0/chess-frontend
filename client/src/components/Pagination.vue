<template>
  <div class="pagination">
    <span disabled class="pagination__btn" @click="updatePage(storeCurrentPage - 1)">Prev</span>
    <span class="pagination__btn" @click="updatePage(storeCurrentPage + 1)">Next</span>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
  export default {
    
    data() {
      return {
        currentPage: 0,
        pageSize: 10,
        visibleFriends: [],
        friendsData: []
      }
    },
    async created() {
      await this.getData()
      this.updateVisibleFriends()
    },
    computed: {
      storeCurrentPage() {
        return this.$store.state.currentPage
      }
    },
    methods: {
      async getData() {
        await axios.get('http://localhost:8000/api/get-friends')
          .then(resp => resp.data)
          .then(data => {
            this.friendsData = data
            console.log(data)
          })
      },
      updatePage(pageNumber) {
        console.log("updating Page")
        this.$store.dispatch("updatePage", pageNumber)
      },
      updateVisibleFriends() {
        this.visibleFriends = this.friendsData.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)

        if (this.visibleFriends.length == 0 && this.currentPage > 0) {
          this.updatePage(this.currentPage - 1)
        }
      }
    }

  }
</script>

<style scoped>

</style>