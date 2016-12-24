<template>
	<div id="VRepSinger">
		<div class="wrap">
			<nav>
				<input type="radio" name="singer" checked="checked" id="input1" @click='toggleSection'><a id="seleclt1">全部歌手</a>
				<input type="radio" name="singer" id="input2" @click='toggleSection'><a id="seleclt2">华语歌手</a>
				<input type="radio" name="singer" id="input3" @click='toggleSection'><a id="seleclt3">韩国歌手</a>
				<input type="radio" name="singer" id="input4" @click='toggleSection'><a id="seleclt4">日本歌手</a>
				<input type="radio" name="singer" id="input5" @click='toggleSection'><a id="seleclt5">欧美歌手</a>
			</nav>
			<div class="container">
				<section id="all">
					<div class="viewport">
						<div class="item" v-for="item in singerImg.all">
							<a :href="item.url"><img :src="item.portrait"></a>
							<div class="protaitName"><a :href="item.url">{{item.name}}</a></div>
						</div>
						<div class="split"></div>
					</div>
					<div class="block">
						<el-pagination layout="prev,pager,next" :total="30"  @current-change="handleCurrentChange"></el-pagination>
					</div>
				</section>
				<section id="Chinese">
					<div class="viewport">
						<div class="item" v-for="item in singerImg.Chinese">
							<a :href="item.url"><img :src="item.portrait"></a>
							<div class="protaitName"><a :href="item.url">{{item.name}}</a></div>
						</div>
						<div class="split"></div>
					</div>
					<div class="block">
						<el-pagination layout="prev,pager,next" :total="10"  @current-change="handleCurrentChange"></el-pagination>
					</div>
				</section>
				<section id="Korea">
					<div class="viewport">
						<div class="item" v-for="item in singerImg.Korea">
							<a :href="item.url"><img :src="item.portrait"></a>
							<div class="protaitName"><a :href="item.url">{{item.name}}</a></div>
						</div>
						<div class="split"></div>
					</div>
					<div class="block">
						<el-pagination layout="prev,pager,next" :total="10"  @current-change="handleCurrentChange"></el-pagination>
					</div>	
				</section>
				<section id="Japanese">
					<div class="viewport">
						<div class="item" v-for="item in singerImg.Japanese">
							<a :href="item.url"><img :src="item.portrait"></a>
							<div class="protaitName"><a :href="item.url">{{item.name}}</a></div>
						</div>
						<div class="split"></div>
					</div>
					<div class="block">
						<el-pagination layout="prev,pager,next" :total="10"  @current-change="handleCurrentChange"></el-pagination>
					</div>
				</section>
				<section id="Europe">
					<div class="viewport">
						<div class="item" v-for="item in singerImg.Europe">
							<a :href="item.url"><img :src="item.portrait"></a>
							<div class="protaitName"><a :href="item.url">{{item.name}}</a></div>
						</div>
						<div class="split"></div>
					</div>
					<div class="block">
						<el-pagination layout="prev,pager,next" :total="10"  @current-change="handleCurrentChange"></el-pagination>
					</div>
				</section>
			</div>
			<footer></footer>
		</div>
	</div>
</template>

<script>
let inAllItem;
let inputs;
let sections;

export default {

  name: 'VrepertorySinger',

  data () {
    return {
    	singerImg:{
    		all:[
			{
				name:'薛之谦',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000002J4UUk29y8BY.jpg',
				url:''
			},
			{
				name:'李荣浩',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000000aHmbL2aPXWH.jpg',
				url:''
			},
			{
				name:'王菲G',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000000GDDuQ3sGQiT.jpg',
				url:''
			},
			{
				name:'林俊杰',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000001BLpXF2DyJe2.jpg',
				url:''
			},
			{
				name:'邓紫祺',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000001fNHEf1SFEFN.jpg',
				url:''
			},
			{
				name:'BIGBAN (빅뱅)',
				portrait:'/static/images/singerImg/Korea/T001R300x300M000004AlfUb0cVkN1.jpg',
				url:''
			},
			{
				name:'Alan Walker',
				portrait:'/static/images/singerImg/Europe/T001R150x150M0000020PeOh4ZaCw1.jpg',
				url:''
			},
			{
				name:'澤野弘之 ',
				portrait:'/static/images/singerImg/Japanese/T001R150x150M0000023TUOS0vGD8C.jpg',
				url:''
			},
			{
				name:'TFBOYS',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000000zmpju02bEBm.jpg',
				url:''
			},
			{
				name:'Wiz Khalifa',
				portrait:'/static/images/singerImg/Europe/T001R150x150M000000CQ06r24Naco.jpg',
				url:''
			},
			{
				name:'Avril Lavigne',
				portrait:'/static/images/singerImg/Europe/T001R150x150M000001Ic36m4AhaBw.jpg',
				url:''
			},
			{
				name:'秦基博',
				portrait:'/static/images/singerImg/Japanese/T001R150x150M0000022PHem4L6smh.jpg',
				url:''
			},
			{
				name:'TK from 凛として時',
				portrait:'/static/images/singerImg/Japanese/T001R150x150M0000006c3Oz12Ipwq.jpg',
				url:''
			},
			{
				name:'庄心妍',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000003Cn3Yh16q1MO.jpg',
				url:''
			},
			{
				name:'张学友',
				portrait:'/static/images/singerImg/Chinese/T001R150x150M000004Be55m1SJaLk.jpg',
				url:''
			},
			{
				name:'汪苏泷',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000001z2JmX09LLgL.jpg',
				url:''
			},
			{
				name:'鹿晗',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000001SqkF53OEhdO.jpg',
				url:''
			},
			{
				name:'华晨宇',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000002Vcz8F2hpBQj.jpg',
				url:''
			},
			{
				name:'那英',
				portrait:'/static/images/singerImg/Chinese/T001R150x150M000003LCFXH0eodXv.jpg',
				url:''
			},
			{
				name:'陈奕迅',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000003Nz2So3XXYek.jpg',
				url:''
			},
			{
				name:'Charlie Puth',
				portrait:'/static/images/singerImg/Europe/T001R150x150M000000jnR7q3pCzYG.jpg',
				url:''
			},
			{
				name:'A-Lin',
				portrait:'/static/images/singerImg/Chinese/T001R150x150M000003ArN8Z0WpjTz.jpg',
				url:''
			},
			{
				name:'宇多田ヒカル',
				portrait:'/static/images/singerImg/Japanese/T001R150x150M000002JptyK0sIn6P.jpg',
				url:''
			},
			{
				name:'소유 ',
				portrait:'/static/images/singerImg/korea/T001R150x150M000002VGfNe404G7z.jpg',
				url:''
			},
    		],
    		Chinese:[
    		{
    			name:'薛之谦',
    			portrait:'/static/images/singerImg/Chinese/T001R300x300M000002J4UUk29y8BY.jpg',
    			url:''
    		},
    		{
    			name:'李荣浩',
    			portrait:'/static/images/singerImg/Chinese/T001R300x300M000000aHmbL2aPXWH.jpg',
    			url:''
    		},
    		{
    			name:'汪苏泷',
    			portrait:'/static/images/singerImg/Chinese/T001R300x300M000001z2JmX09LLgL.jpg',
    			url:''
    		},
    		{
    			name:'鹿晗',
    			portrait:'/static/images/singerImg/Chinese/T001R300x300M000001SqkF53OEhdO.jpg',
    			url:''
    		},
    		{
    			name:'华晨宇',
    			portrait:'/static/images/singerImg/Chinese/T001R300x300M000002Vcz8F2hpBQj.jpg',
    			url:''
    		},
    		{
				name:'庄心妍',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000003Cn3Yh16q1MO.jpg',
				url:''
			},
			{
				name:'那英',
				portrait:'/static/images/singerImg/Chinese/T001R150x150M000003LCFXH0eodXv.jpg',
				url:''
			},
			{
				name:'王菲G',
				portrait:'/static/images/singerImg/Chinese/T001R300x300M000000GDDuQ3sGQiT.jpg',
				url:''
			},
    		],
    		Korea:[
    		{
    			name:'소유 (昭宥)',
    			portrait:'/static/images/singerImg/korea/T001R150x150M000002VGfNe404G7z.jpg',
    			url:''
    		},
    		{
    			name:'BIGBANG (빅뱅)',
    			portrait:'/static/images/singerImg/korea/T001R300x300M000004AlfUb0cVkN1.jpg',
    			url:''
    		},
    		{
    			name:'찬열 (灿烈)',
    			portrait:'/static/images/singerImg/korea/T001R150x150M000002iE9xv2DuIQT.jpg',
    			url:''
    		},
    		{
    			name:'MINO (宋旻浩)',
    			portrait:'/static/images/singerImg/korea/T001R150x150M000000FWvLC2alyWL.jpg',
    			url:''
    		},
    		{
    			name:'백지영 (白智英)',
    			portrait:'/static/images/singerImg/korea/T001R150x150M000002uVveG0gdqAd.jpg',
    			url:''
    		},
    		{
    			name:'효린 (孝琳)',
    			portrait:'/static/images/singerImg/korea/T001R150x150M000003XGKPF3lw4Nc.jpg',
    			url:''
    		},
    		{
    			name:'박신혜 (朴信惠)',
    			portrait:'/static/images/singerImg/korea/T001R300x300M000001FkHto143bVo.jpg',
    			url:''
    		},
    		{
    			name:'이루마 (李闰珉)',
    			portrait:'/static/images/singerImg/korea/T001R150x150M000001eP4mf0NHjtY.jpg',
    			url:''
    		},
    		],
    		Japanese:[
    		{
    			name:'TK from 凛として時',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M0000006c3Oz12Ipwq.jpg',
    			url:''
    		},
    		{
    			name:'秦基博 (はたもとひ)',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M0000022PHem4L6smh.jpg',
    			url:''
    		},
    		{
    			name:'倉木麻衣',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M000002qS3if49uvn0.jpg',
    			url:''
    		},
    		{
    			name:'宇多田ヒカル',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M000002JptyK0sIn6P.jpg',
    			url:''
    		},
    		{
    			name:'鹿乃 (かの)',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M000004PT6gg3cLvxv.jpg',
    			url:''
    		},
    		{
    			name:'澤野弘之',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M0000023TUOS0vGD8C.jpg',
    			url:''
    		},
    		{
    			name:'浜崎あゆみ (滨崎步)',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M000000bzeAd1jLft0.jpg',
    			url:''
    		},
    		{
    			name:'Otokaze',
    			portrait:'/static/images/singerImg/Japanese/T001R150x150M000002nnqtF0UjYQM.jpg',
    			url:''
    		},
    		],
    		Europe:[
    		{
    			name:'Alan Walker',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M0000020PeOh4ZaCw1.jpg',
    			url:''
    		},
    		{
    			name:'Charlie Puth',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000000jnR7q3pCzYG.jpg',
    			url:''
    		},
    		{
    			name:'Avril Lavigne',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000001Ic36m4AhaBw.jpg',
    			url:''
    		},
    		{
    			name:'Wiz Khalifa',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000000CQ06r24Naco.jpg',
    			url:''
    		},
    		{
    			name:'Taylor Swift',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000000qrPik2w6lDr.jpg',
    			url:''
    		},
    		{
    			name:'Adele (阿黛尔)',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000003CoxJh1zFPpx.jpg',
    			url:''
    		},
    		{
    			name:'Justin Bieber',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000002DYpxl3hW3EP.jpg',
    			url:''
    		},
    		{
    			name:'The Weeknd',
    			portrait:'/static/images/singerImg/Europe/T001R150x150M000004YnseG2vQN7h.jpg',
    			url:''
    		},
    		]
    			
    		


    	}

    };
  },


  methods: {
  	handleCurrentChange (val) {
  		for (var i = 0; i < inAllItem.length; i++) {
  			inAllItem[i].style.display="block";
  		}
  		  this.currentPage = val;
  		  for (var i = 0; i < (val-1)*8; i++) {
  		  	inAllItem[i].style.display="none";
  		  }
  	},
  	toggleSection() {
  		try{
  			for (var i = 0; i < inputs.length; i++) {
  				if(inputs[i].checked == true){
  					sections[i].style.display='block';
  				}else {
  				  	sections[i].style.display='';
  				}
  			}
  		}
  		catch (e){}//Cannot read property 'style' of undefined
  		
  	}
  },

  mounted() {
  	let all = this.$el.querySelector('#all');
  	inputs = this.$el.querySelectorAll('input');
  	sections = this.$el.querySelectorAll('section');
  	inAllItem = all.querySelectorAll('.item');
  	this.toggleSection();
  }

};
</script>

<style lang="css" scoped>
	#VRepSinger {
		width: 100%;
		height: 70%;
		position: absolute;
		background: url(../assets/images/bg_detail.jpg) 50%  -20px repeat-x;
		text-align: center;
	}
	.wrap {
		position: absolute;
		width: 1200px;
		margin: 0 auto;
		left: 0px;
		right: 0px;
	}
	nav>input,nav>a {
		top: 40px;
		width: 100px;
		height: 25px;
		position: absolute;
		cursor: pointer;
	}
	input {
		background-color: blue;
		z-index: 100;
		opacity: 0;
	}
	a {
		text-decoration: none;
		color: black;
	}
	input:hover + a {
		color: #20A0FF;
	}
	#input1,#seleclt1 {
		left: 30%;
	}
	#input2,#seleclt2 {
		left: 40%;
	}
	#input3,#seleclt3 {
		left: 50%;
	}
	#input4,#seleclt4 {
		left: 60%;
	}
	#input5,#seleclt5 {
		left: 70%;
	}
	input:checked + a{
		color: #20A0FF;
	}

	.container {
		position: relative;
		top: 100px;
		width: 1200px;
	}

	section {
		display: none;
	}

	.viewport {
		height: 610px;
		overflow: hidden; 
	}
	.item {
		float: left;
	}
	img {
		margin: 40px 50px;
		width: 200px;
		height: 200px;
		border-radius: 999px;
	}

	img:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
	.block {
		margin-top: 50px;
	}
	
	


</style>