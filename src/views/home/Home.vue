<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper.vue'
    
  import {request} from 'network/request'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
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
      url: '/multidata',
      params:{ids:{1:1}}
    }).then(res => {
      console.log(res)
      this.banners = res.data.banner.list
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
