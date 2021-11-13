<template>
  <div class="good-list">   
    
      <good-list-item :item="item" 
                      v-for="(item, index) in goods" 
                      :key="index" 
                      class="good-list-itemd"></good-list-item>
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
   /* overflow: hidden; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    /* height: 20000px; */
    width: 100vw;
    
  }
  .good-list-itemd {
    width: 47%;
    margin: 4px;
    /* display: flex; */
    

    
    
  }
</style>