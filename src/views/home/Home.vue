<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"/>
    <feater-view></feater-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabCoClick="tabCli"></tab-control>
    <good-list :goods="goods[currentType].list"></good-list>
    
    
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeaterView from './childComps/FeaterView.vue'
  import TabControl from 'components/content/TabControl.vue'
  import GoodList from 'components/content/goods/GoodList.vue'
    
  import {getMultiData, getGoodsData} from 'network/home'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeaterView,
      TabControl,
      GoodList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          pop:{
            page: 0,
            list: []
          },
          new:{
            page: 0,
            list: []
          },
          sell:{
            page: 0,
            list: []
          }
        },

        currentType: 'pop'
      }
    },
    created() {
      // 1.请求多个数据
      this.getMultiData()
      
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    
    },
    methods: {
      getMultiData() {
        getMultiData().then(res => {
          // console.log(res)
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getGoods(type) {
        const page = this.goods[type].page += 1
        getGoodsData(type,page).then(res => {
          this.goods[type].list.push(...res.data.goods.list)
          this.goods[type].page +=1

          console.log(this.goods[type].list)
        })
      },

      tabCli(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
          
        }
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  #home {
    height: 2000px;
    padding-top: 44px;
    /* width: 100%; */
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
