<template>
    <div>
      <!--保持缓存 缓存页面-->

        <transition name="trans" >
          <keep-alive>
          <router-view class="view"></router-view>
          </keep-alive>
        </transition>
      <tab></tab>
    </div>
</template>
<script>
import Tab from 'components/Tab'
export default {
  components:{
    Tab
  }
}
</script>
<style scoped>
  .view{
    position: absolute;
    width: 100%;
    top:0;
    left: 0;
    bottom: 65px;
  }
  .trans-enter{
    transform: translate(100%);
  }
  .trans-enter-active{
    transition: 0.2s linear;
  }
  .trans-leave-active{
    transition: 0.2s linear;
    transform: translate(-100%);
  }

  .content{
    margin-bottom: 65px;
  }
</style>
