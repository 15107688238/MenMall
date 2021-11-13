<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                    class="tab-control1" 
                    @tabCoClick="tabCli"
                    ref="tabControl1"
                    v-show="Tcshow"></tab-control>
    <scroll class="content1" 
            ref="scroll"
            :probeType="2"
            @scrollChange = "scrollChange"
            :pull-up-load="true"
            @pullUpLoad="getMore">
      <home-swiper :banners="banners"
                   @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"/>
      <feater-view></feater-view>
      <tab-control :titles="['流行','新款','精选']"  
                    @tabCoClick="tabCli"
                    ref="tabControl0"></tab-control>
      <good-list :goods="goods[currentType].list"
                  ></good-list>
    </scroll>
    <back-top @click.native="backClick"
              v-show="isShow"></back-top>
    
    
  </div>
</template>

<script>
  import {getMultiData, getGoodsData} from 'network/home'

  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeaterView from './childComps/FeaterView.vue'
  import TabControl from 'components/content/TabControl.vue'
  import GoodList from 'components/content/goods/GoodList.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from '../../components/common/backtop/BackTop.vue'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeaterView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
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
        currentType: 'pop',
        isShow: false,
        TCoffsetTop: 0,
        Tcshow: false
      }
    },
    created() {
      // 1.请求多个数据
      this.getMultiData()
      
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    
    },
    mounted () {
      //监听图片是否加载完成
      this.$bus.$on('imageLoad', () => {
        this.$refs.scroll.refresh()
        // console.log(this.$refs.scroll1)
      })
    },
    methods: {
      //网络请求相关
      getMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getGoods(type) {
        const page = this.goods[type].page + 1
        getGoodsData(type,page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1

         
          this.$refs.scroll.finishPullUp()
        })
      
      },
      //事件监听
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
        this.$refs.tabControl0.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },
      //点击返回顶部
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      //监听滚动
      scrollChange(position){
        // console.log(position)
        this.isShow = (-position.y) > 1000
        this.Tcshow = (-position.y) > this.TCoffsetTop
      },
      swiperImgLoad() {
        this.TCoffsetTop = this.$refs.tabControl0.$el.offsetTop
      },
      //上拉加载更多
      getMore() {
        this.getGoods(this.currentType)
      }
    }
  }
</script>

<style scoped>
  .tab-control1 {
    position: relative;
    z-index: 9;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  #home {
    /* height: 20000px; */
    /* padding-top: 44px;
    padding-bottom: 49px; */
    /* overflow: hidden; */
    /* width: 100%; */

  }
  
  .content1 {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
