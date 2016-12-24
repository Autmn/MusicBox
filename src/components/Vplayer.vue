<template>
	<div id="Vplayer">
		<div>
			<div class="flag" @click="ok=!ok"><img src="../assets/images/flag.png" height="40" width="40"></div>
			<div class="content" v-if="ok">
				<div class="controls">dfg</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Vplayer',

  data () {
    return {
    	ok: false,
    };
  }
};
</script>

<style lang="css" scoped>
	#Vplayer{
	  
	}
	.content {
		position: fixed;
		z-index: 1;
		width: 100%;
		height: 100%;
		background-color: #E3E3E3;
		opacity: 1;

	}
	.flag {
	    position: fixed;
	    z-index: 2;
	    left: 30px;
		width: 40px;
		height: 40px;
		background:rgba(32,160,255,0.8);
		box-shadow:  0 2px 6px rgba(0,0,0,0.8);
		cursor: pointer;
		
	}
	.controls{
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>