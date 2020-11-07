<template>
<div>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" src="https://imgs.qunarzz.com/sight/p0/1601/1c/1cdfd6a29fd1813990.img.jpg_710x360_f9eedd89.jpg"/>
    <div class="banner-info">
      <div class="banner-title">南浔古镇（5A景区）</div>
      <div class="banner-number"><span class="iconfont banner-icon">&#xe730;</span>39</div>
    </div>
  </div>
  <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></CommonGallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: [
        'https://imgs.qunarzz.com/sight/p0/2005/55/55889dc6d90e7bcaa3.water.jpg_710x360_46426390.jpg',
        'https://imgs.qunarzz.com/sight/p0/2005/77/7754f7e0e18ecc41a3.water.jpg_710x360_90312300.jpg',
        'https://imgs.qunarzz.com/sight/p0/2005/1e/1e2579586bfb406ea3.water.jpg_710x360_39be1274.jpg',
        'https://imgs.qunarzz.com/sight/p0/2005/fb/fbc2a25a37980fa1a3.water.jpg_710x360_c1a4011a.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 50.7%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      margin-right .1rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .4rem
        line-height .4rem
        margin-top .1rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
