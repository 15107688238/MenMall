<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>

  export default {
    name: 'BackTop'
  }
</script>
<style  scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
  .back-top img {
    width: 43px;
    z-index: 20;
  }
</style>