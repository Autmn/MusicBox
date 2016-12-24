<template>
	<div id="vrepertory">
		<nav>
			<ul id="mainNav">
				<router-link :to = "'/musicRepertory/header'" tag = 'li'>首页</router-link>
				<router-link :to = "'/musicRepertory/singer'" tag = 'li' >歌手</router-link>
				<router-link :to = "'/musicRepertory/album'" tag = 'li'>专辑</router-link>
				<router-link :to = "'/musicRepertory/range'" tag = 'li'>排行榜</router-link>
				<router-link :to = "'/musicRepertory/MV'" tag = 'li'>MV</router-link>
			</ul>
		</nav>
		<div class="split"></div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	var data = {

	};
	export default {
		data () {
			return data;
		}
	}
</script>

<style type="text/css" scoped>
	ul {
		min-width: 1200px;
		max-width: 1200px;
		margin: auto;
		list-style-type: none;
	}
	li:first-child {
		margin-left: 350px;
	}
	li {
		float: left;
		padding: 25px;
		color: black;
	}
	li:hover{
		color: #20A0FF;
		cursor: pointer;
	}
	li.router-link-active {
		color: #20A0FF;
	}
</style>