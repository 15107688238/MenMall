<template>
  <div class="wrapper" ref="scroll">
    <div class="content" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        BScroll: null
      }
    },
    mounted() {
      
      this.BScroll = new BetterScroll(this.$refs.scroll,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: true
      })
      //监听scroll
      this.BScroll.on('scroll', position => {
        // console.log(position)
        this.$emit('scrollChange', position);
      }),

      //上拉加载
      this.BScroll.on('pullingUp', () => {
        this.$emit('pullUpLoad');
      })

      //
    },
    methods: {

      refresh() {
        this.BScroll && this.BScroll.refresh()
      },

      scrollTo(x, y, time = 500) {
        this.BScroll && this.BScroll.scrollTo(x, y, time)
      },

      finishPullUp() {
        this.BScroll && this.BScroll.finishPullUp()
      }
    }
  }
</script>
<style  scoped>

</style>