<template>
  <div id="app">
    <Vplayer></Vplayer>
    <vnav></vnav>
     <router-view></router-view>
  </div>
</template>

<script>
import Vplayer from './components/Vplayer.vue'
import Vnav from './components/Vnav'
export default {
  name: 'app',
  components: {
    Vplayer,
    Vnav
  }
}
</script>
<style type="text/css">
#app{
	font-family: poppin,"PingFang SC",Tahoma,Arial,微软雅黑,sans-serif;
	min-width: 1240px;
}

.split {
	clear: both;
}
</style>
