<template>
  <div class="good-list">
    
    <div v-for="(item, index) in goods" :key="index" class="good-list-itemd">
      <good-list-item :item="item"></good-list-item>
    </div>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'

export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  }
}
</script>

<style scoped>
  .good-list{
   overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }
  .good-list-itemd {
    width: 47%;
    margin: 5px;
  }
</style>