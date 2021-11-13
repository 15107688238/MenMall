<template>
  <div class="good-list-item">
    <div class="item-img1">
      <img :src="item.show.img" alt="" @load="imgLoad">
    </div>
    
    <p>{{item.title}}</p>
    <div >
      <span class="goods-price">{{getPrice}}</span>
      <span class="goods-cfav">{{getFav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  computed: {
    getPrice() {
      return '¥ ' + this.item.price
    },
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
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
  .item-img1 {
    border-radius: 8px;
    overflow: hidden;
    
  }
  .good-list-item p{
    padding: 5px 0;
  }
  .good-list-item img {
    width: 100%;
    vertical-align: bottom;
    /* height: 200px; */
  } 
  .good-list-item p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .good-list-item {
    width: 100%;
  }
  .goods-price {
    display: inline-block;
    width: 50%;
    text-align: center;
    color: var(--color-tint)
  }
  .goods-cfav {
    display: inline-block;
    width: 50%;
  }
  .goods-cfav::before {
    display: inline-block;
    position: relative;
    top: 1px;
    content: '';
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>