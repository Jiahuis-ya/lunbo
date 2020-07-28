<template>
  <div class="sw-swiper">
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide class="slide" v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script language="javascript">
export default {
  name: 'HomeLunbo',
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      },
      swiperList: [
        {
          id: '1',
          imgUrl: '//imgcps.jd.com/ling4/100002427783/5raI5pqR5Yip5Zmo/5Yaw54i95LiA5aSP/p-5d91a4f642dd5b7c7d52cbe9/1838f35b/cr/s1125x690/q70.jpg'
        },
        {
          id: '2',
          imgUrl: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/129405/37/6793/199845/5f07fd8bEa9023c38/7ba8c41b8854f4aa.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id: '3',
          imgUrl: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/140889/1/2894/85182/5f0c735eE4d168516/64489e62700267c7.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id: '4',
          imgUrl: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/132833/8/3349/136756/5efa9249Ee8947743/bfb5e0bd339a4d75.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl';
  .sw-swiper{
    position: absolute;
    top: $headerHeight;
    left: 0;
    width: 100%;
    height: 2.8rem;
  }

  .sw-swiper .swiper-img{
    margin-top: .15rem;
    width: 95%;
    height: 2.5rem;
    border-radius: .3rem;
  }
</style>
