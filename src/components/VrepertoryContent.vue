<template>
	<div id="VrepertoryContent">
		<div id="rep-container-newSong">
			<h2>新歌首发</h2>
			<nav>
				<ul>
					<router-link :to="'/musicRepertory/header'" tag='li' exact>全部</router-link>
					<router-link :to="'/musicRepertory/header/Chinese'" tag='li'>华语</router-link>
					<router-link :to="'/musicRepertory/header/Europe'" tag='li'>欧美</router-link>
					<router-link :to="'/musicRepertory/header/korea'" tag='li'>韩国</router-link>
					<router-link :to="'/musicRepertory/header/Japan'" tag='li'>日本</router-link>
				</ul>
			</nav>			
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {

  name: 'VrepertoryContent',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>

#rep-container-newSong {
	height: 734px;
	background: #000 url(../assets/images/bg_index_new.jpg) 50% 0 repeat-x;
	color: #fff;
	text-align: center;
	position: relative;
}
h2 {
	font-weight: 100;
	font-size: 45px;
	letter-spacing: 10px;
	padding-top: 80px;
	margin-top: 0px;
	margin-bottom: 43px;
	cursor: default;
}
li {
	padding: 0 42px;
	float: left;
}

li:hover {
	cursor: pointer;
}
ul {
	width: 580px;
	margin:0 auto;
	padding: 0px;
	list-style-type: none;
}
.router-link-active {
	color: #20a0ff;
}

</style>