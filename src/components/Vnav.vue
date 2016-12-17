<template>
	<div id="m-nav">
		<div id="content">
			<ul>
				<li><a><img src="../assets/images/logo.png" alt="logo" /></a></li>
				<router-link :to="'/musicRepertory'" tag="li" >音乐馆</router-link>
				<router-link :to="'/myMusic'" tag="li">我的音乐</router-link>
				<li>VIP</li>
			</ul>
			<el-input class="searchInput" placeholder = "薛之谦" icon = "search"></el-input>
			<div class="loginBtn">
				<a @click="popLogin">登陆</a>
			</div>

			<!-- 登录表单 -->
			<el-dialog title="登录" v-model="dialogFormVisible" size="tiny">
				<el-form>
					<el-form-item label="用 户 名:">
						<el-input auto-complete='on' class="loginInput"></el-input>
					</el-form-item>
					<el-form-item label=" 密 码:" class="password">
						<el-input type="password" class="loginInput"></el-input>
					</el-form-item>
				</el-form>

				<div slot="footer" class="dialog-footer">
				  <el-button>注 册</el-button>
				  <el-button type="primary">登 录</el-button>
				</div>
			</el-dialog>
		</div>
		<div class="split"></div>
	</div>
</template>
<script type="text/javascript">
	
	var data = {
		dialogFormVisible: false,
		
	}
	export default {
		data () {
				return data;
			},
		 methods:{
			popLogin: function () {
				this.dialogFormVisible = true;
			}
		}
	}
</script>

<style type="text/css" scoped>
		ul,li,input {
			margin: 0px;
			padding: 0px;
		}
		#content{
			text-align: center;
			margin: 0 auto;
			width: 1100px;
		}
		#m-nav {
			min-width: 1200px;
			max-width: 1200px; 
			margin: 0 auto;
			border-bottom: 1px solid #f2f2f2;
		}
		#m-nav ul {
			list-style: none;
		}
		#m-nav li:first-child {
			width: 200px;
			padding: 0px 30px;
		}
		#m-nav li {
			float: left;
			line-height: 80px;
			width: 100px;
			height: 80px;
			font-size: 20px;
			padding: 0px 30px;
			text-align: center;
		}

		#m-nav li:hover {		
			cursor: pointer;
		}

		.router-link-active{
			background-color: #20a0ff;
			color: white;
		}

		.searchInput {
			float: left;
			margin-top: 22px;
			padding: 0;

		}
		#m-nav i {
			cursor: pointer;
		}
		#m-nav .loginBtn {
			float: left;
			line-height: 80px;
			width: 40px;
			text-align: center;
			margin-left: 40px;
		}
		#m-nav .loginBtn:hover {
			color: #20a0ff;
			cursor: pointer;
		}

		.el-form-item {
			width: 50%;
			margin:20px auto;
		}
	
		.password {
			word-spacing: 18px;
		}
		.loginInput {
			float: left;
		}
		.dialog-footer {
			text-align: center;
		}
	</style>
