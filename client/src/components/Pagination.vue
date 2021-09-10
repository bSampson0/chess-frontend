<template>
  <div class="pagination">
    <div class="pagination__btn prev" :class="{ disabled: showPrevious }" @click="updatePage(currentPage - 1)">Prev</div>
    <div class="pagination__pages" v-if="innerWidth > 600">
      <span v-for="page in pageRange" :key="page" class="page">
       <span @click="updatePage(page-1)">{{page}}</span>
      </span>
    </div>
    <div class="pagination__btn next" :class="{ disabled: showNext }" @click="updatePage(currentPage + 1)">Next</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../store/index'

@Component
export default class Pagination extends Vue {
  pageSize = 10
  visibleFriends = []
  friendsData = []
  pageRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  isActive = false

  get currentPage(): number {
    return store.state.currentPage
  }
  get totalPages(): number {
    return Math.ceil(store.state.friends.length / store.state.pageSize)
  }
  get showPrevious(): boolean {
    return this.currentPage > 0 ? false : true
  }
  get showNext(): boolean {
    return this.currentPage == this.totalPages - 1 ? true : false
  }
  get innerWidth(): number {
    return store.state.windowWidth
  }

  setPageRange() {
    this.pageRange.length = 0
    let start = this.currentPage
    let end = Math.min(this.currentPage + 10, this.totalPages)
    for (let i = start; i < end; i++) {
      this.pageRange.push(i)
    }
  }

  setActive(page) {
    if (page == this.currentPage) {
      this.isActive = true
    }
  }

  updatePage(pageNumber: number) {
    console.log(pageNumber + 1)
    store.dispatch("updatePage", pageNumber)
    this.setPageRange()
  }

}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(0,0,0,.1);
  padding: 1rem;
  border-radius: .5rem;
  margin-top: 1.5rem;

  &__btn {
    cursor: pointer;
    
    &.prev::before {
      content: "< ";
    }
    &.next::after {
      content: " >";
    }
  }
}

  .disabled {
    pointer-events: none;
    color: rgb(172, 172, 172);
  }

  .active {
    color: #fff !important;
  }

  .page {
    cursor: pointer;
    margin: 0px 5px;
    color: rgb(210, 210, 210);
  }

</style>