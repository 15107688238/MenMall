<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {request} from 'network/request'

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
    request({
      url: '/multidata'
    }).then(res => {
      console.log(res)
    })
      
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
