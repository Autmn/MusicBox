<template>
	<div class="myMusic">
		<div class="bgImg">
			<div class="wrap">
				<h2>听我想听,MUSICBOX</h2>
				<el-button type="primary" class="loginBtn">立即登录</el-button>
			</div>
		</div>
		<footer>
			<div class="hr">_______</div>
			<img src="../assets/images/logo.png" height="80" width="230">
			<div class="hr">_______</div>
		</footer>
	</div>
</template>

<script>
export default {

  name: 'VmyMusic',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
	.myMusic {
		
	}
	.bgImg {
		position: relative;
		top: -1px;
		height: 709px;
		background: #000 url(../assets/images/bg.png) 50% 0 repeat-x;
		
	}
	.wrap {

	}
	h2 {
		color: white;
		position: absolute;
		left: 50%;
		transform: translate(-50%,200%);
	}
	.loginBtn {
		font-size: 20px;
		font-family: poppin,"PingFang SC",Tahoma,Arial,微软雅黑,sans-serif;
		position: absolute;
		left: 50%;
		
		animation: moveup 2s linear both;
		-webkit-animation: moveup 2s linear both;
	}

	@keyframes moveup {
		0% {
			transform: translate(-50%,800%);
			opacity: 0.5;
		}
		25% {
			transform: translate(-50%,780%);
			opacity: 0.7;
		}
		50% {
			transform: translate(-50%,760%);
			opacity: 0.8;
		}
		65% {
			transform:translate(-50%,740%);
			opacity: 0.9;
		}
		100% {
			transform: translate(-50%,700%);
			opacity: 1;
		}
	}
	footer {
		padding: 0;
		position: absolute;
		left: 50%;
		transform:translate(-50%,50%);
	}
	.hr {
		float: left;
		position: relative;
		top: 20px;
	}
	img {
		float: left;
	}
</style>