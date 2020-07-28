<template>
  <div>
    <home-header></home-header>
    <home-lunbo></home-lunbo>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/child/Header'
import HomeLunbo from '@/pages/home/child/Lunbo'
export default {
  name: 'Home',
  components: {
    'home-header': HomeHeader,
    'home-lunbo': HomeLunbo
  }
}
</script>

<style>

</style>
