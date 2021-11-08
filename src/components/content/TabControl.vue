<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" :class="{active: index === currentIndex}" @click="setCurrent(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    setCurrent(index) {
      this.currentIndex = index,
      this.$emit('tabCoClick', index);
    }
  }
}
</script>

<style>
  .tab-control {
    /* overflow: hidden; */
    width: 100%;
    /* height: 34px; */
    
    display: flex;
    text-align: center;
    /* justify-content: space-between; */
    /* position: static; */
    background-color: white;
    
  }
  .tab-control div {
    /* overflow: auto; */
    line-height: 40px;
    flex: 1;
    /* align-items: flex-start; */
  }
  .tab-control div span {
    padding: 10px 5px 5px 5px;
  }
  .active {
    color: var(--color-tint);
  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>