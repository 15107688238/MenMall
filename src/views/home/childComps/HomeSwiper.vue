<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image"  @load="imgload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgload() {
      this.$emit('swiperImgLoad');
    }
  }
}
</script>

<style scoped>
  img {
    /* width: 100%; */
  }
</style>