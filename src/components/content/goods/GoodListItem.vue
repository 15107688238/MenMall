<template>
  <div class="good-list-item">
    <div><img :src="item.image" alt=""></div>
    
    <p>{{item.titles}}</p>
    <div>
      <span>{{item.price}}</span>
      <span>{{getFav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  computed: {
    getFav() {
      return this.item.cfav > 999 ? '999+' : this.item.cfav
    }
  },
  props: {
    item: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
 
  .good-list-item img {
    width: 100%;
  } 
  .good-list-item p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
</style>