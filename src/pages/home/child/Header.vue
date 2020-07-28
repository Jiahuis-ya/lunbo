<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-caidan"></span>
    </div>
    <div class="header-middle">
      <span class="iconfont icon-jingdong"></span>
      <span class="line"></span>
      <span class="iconfont icon-sousuo"></span>
      <!-- <div class="kw">联想一体机</div> -->
      <!-- <input type="text" class="header-input" /> -->
      <div class="search-input">
        <div class="kw">联想一体机</div>
        <input type="text" class="header-input" />
      </div>
    </div>
    <div class="header-right">
      <a href="" class="lkdl">登录</a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/variables.styl';

  input{
    outline: none;
    border: none;
    box-sizing: border-box;
  }

  .header{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $headerHeight;
    color: #fff;
    font-size: .28rem;
    background-color: $bgColor;
    line-height: $headerHeight;
  }

  .header .header-left{
    width: .8rem;
    height: 100%;
  }

  .header .header-middle{
    position: relative;
    padding: 0 .2rem 0 1.36rem;
    flex: 1;
    height: .6rem;
    line-height: .6rem;
    background-color: #fff;
    color: #999;
    border-radius: 50px;
    overflow: hidden;
  }

  .header .header-left .iconfont{
    font-size: .4rem;
  }

  .header .header-middle .iconfont{
    position: absolute;
    top: 0;
    left: .8rem;
    color: #999;
    font-size: .3rem;
  }

  .header .header-middle .iconfont.icon-jingdong{
    left: .2rem;
    color: $jdColor;
  }

  .header .header-middle .line{
    position: absolute;
    top: .15rem;
    left: .67rem;
    width: .02rem;
    height: .32rem;
    border-right: .02rem solid rgb(231, 234, 237);
  }

  .header .header-middle .search-input{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing : border-box;
  }

  .header .header-middle .search-input .kw{
    position: absolute;
    top: .04rem;
    left: .002rem;
    text-align: left;
  }

  .header .header-middle .header-input{
    position: absolute;
    top:.16rem;
    left: 0;
    width: 100%;
    height: .32rem;
    line-height: 100%;
    z-index: 1;
    background-color: transparent;;
  }

  .header .header-right{
    width: .8rem;
    height: 100%;
  }

  .header .header-right .lkdl{
    color: #fff;
  }
</style>
