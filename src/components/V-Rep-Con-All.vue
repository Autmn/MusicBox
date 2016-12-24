<template>
	<div id="V-Rep-Con-All">
		<div class="wrap">
			<div class="pre arrow" @click="togglePre">&lt;</div>
			<div class="Carousel-content">
				<ul id="Item-list">
					<li v-for="item in items">
						<div class="cover">
							<img :src="item.album.img">
							<div class="mask"></div>
							<div class="playerbtn"></div>
						</div>
						<div class="detail">
							<a href="javascript:;">
							<a href="javascript:;">{{item.album.albumName}}</a>
							<a href="javascript:;">{{item.album.singer}}</a>
						</div>
					</li >
				</ul>
			</div>
			<div class="next arrow" @click="toggleNext">&gt;
			</div>
			<div class="indexs">
				<span v-for="i in 3" @click="lightIndex(i)">__</span >
			</div>
		</div>
	</div>	
</template>

<script>
let data = {
	items:[
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'bbf'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'bbf'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'bbf'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		},
		{
			album: {
				img:'static/2.jpg',
				albumName: '谦铭云希',
				singer:'ba'
			}
		}

	]
};

let ul, spans, index = 0, animated = false;
export default {

  name: 'V-Rep-Con-All',

  data () {
    return data;
  },

  mounted: function () {
  	ul = this.$el.querySelector("#Item-list");
  	ul.style.left =  "0px";
  	spans = this.$el.querySelectorAll('span');
  	spans[0].className = "on";
  },

  methods: {
  	togglePre: function () {
  		if(!animated){
  			index -= 1;
  			if(index < 0) index = 2;
  			this.toggle();
  		}
  	},
  	toggleNext: function () {
  		if(!animated) {
  			index += 1;
  		if(index > 2) index = 0;
  		this.toggle();
  		}
  	},
  	toggle: function () {
  			//内容切换
  			let timer = null;
  			animated = true;
  			let offset = (-1200) * index;
  			clearInterval(timer);
  			timer = setInterval(function () {
  				let left,speed;
  				left = parseInt(ul.style.left);
  				speed = (offset - left)/10;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if(left == offset){
  					clearInterval(timer);
  					animated = false;
  				}else{
  					ul.style.left = left + speed + 'px';
  				}
  			},10);

  			//索引标识切换
  			for (var i = 0; i < spans.length; i++) {
  				if( spans[i].className == 'on' )
  					spans[i].className = '';
  			}
  			spans[index].className = 'on';
  		
  	},
  	lightIndex: function (i) {
  		index = i-1;
  		this.toggle();
  	}
  }

};
</script>

<style lang="css" scoped>
	.wrap {
		position: absolute;
		top: 230px;
		width: 100%;
		text-align: center;
		overflow-x: hidden;
	}

	.wrap:hover .pre {
		left: 0;
		transition: left 1s;
	}

	.wrap:hover .next {
		right: 0;
		transition: right 1s;
	}


	.pre {
		position: absolute;
		left: -80px;
		z-index: 1;
		transition: left 1s;
		cursor: pointer;
	}

	.Carousel-content {
		width: 1200px;
		overflow: hidden;
		display: inline-block;
	}

	.next {
		position: absolute;
		right: -80px;
		transition: right 1s;
		cursor: pointer;
	}

	.arrow {
		width: 1%;
		font-size: 40px;
		display: inline-block;
		margin-top: 150px;
		padding: 20px 30px;
		background-color: rgba(255,255,255,0.5);
	}

	.arrow:hover {
		background-color: #20A0FF;
	}

	a {
		text-decoration: none;
		color: white;
	}

	ul {
		position: relative;
		list-style-type: none;
		width: 500%;
		padding: 0px;
	}

	li {
		float: left;
		
	}

	.cover {
		width: 300px;
		height: 300px;
		position: relative;
		overflow: hidden;
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height:100%;
		background-color: #fff;
		opacity: 0;
	}

	.cover:hover img {
		transform: scale(1.2);
		transition: transform 0.5s;
	}
	.cover:hover .mask {
		opacity: 0.4;
		transition: opacity 0.5s; 
		cursor: pointer;
	}

	.playerbtn {
		background-image: url(../assets/images/cover_play.png);
		width: 70px;
		height: 70px;
		position: absolute;
		left: 50%;
		margin-left: -35px;
		top:50%;
		margin-top: -35px;
		z-index: 1;
		transform: scale(0);
		transition: transform 0.3s ease-out;
	}

	.cover:hover .playerbtn{
		transform: scale(1);
		transition: transform 0.5s ease-in;
		display: block;
		cursor: pointer;
	}


	.detail {
		background-color: rgba(0,0,0,.8);
		padding: 20px 0px;
		text-align: center;
	}

	.detail a {
		display: block;
		line-height: 30px;
	}

	li:hover .detail {
		background-color: #20A0FF;
		opacity: 0.8;
	}

	.indexs {
		color: white;
	}

	span {
		font-size: xx-large;
		margin: 0px 5px;
		color: rgba(198,198,198,0.5);
		cursor: pointer;
	}

	.on {
		color: white;
	}
</style>