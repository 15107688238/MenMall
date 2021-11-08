<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: white;
    
  }
  .left,.right {
    width: 60px;
    
  }
  .center {
    flex: 1;
    
  }
</style>