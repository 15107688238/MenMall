<template>
  <div id="home">
    首页
  </div>
</template>

<script>
 

  export default {
    name: "Home",
    components: {
      
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
     
      
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
