<template>
	<div class="denglu">
		<div class="denglu2">
			<img src="../../assets/img/user/9.png" />
		</div>
		<div class="denglu1">
			<input type="text" v-model="name" placeholder="用户名" />
			<input type="text" v-model="pwd" placeholder="密码" />
			<div>
				<button @click="dl">登录</button>
				<router-link to="/home/user/zc">
					<button>注册</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {	
		data() {
			return {
				name: '',
				pwd: '',
				list: []
			}
		},
		
		methods: {						
			dl() {
				this.$axios.post("/loadUser",{
				"name":this.name,
				"pwd":this.pwd				
			}).then((res) => {			
				console.log(res.data.data.length)
				if(res.data.data.length!=0){
						alert("登录成功")
						sessionStorage.setItem("name", this.name);
						location.href="http://localhost:8080/#/home/user/succsee"	
				}else{
					alert("登录失败")
				}
			})
				
//				this.list.forEach((item)=>{
//				if(this.name==item.name && this.pwd==item.pwd){
//						alert("登录成功")
//						sessionStorage.setItem("name", this.name);
//						location.href="http://localhost:8080/#/home/user/succsee"						
//					}									
//				})				
//					alert("登录失败")					
			}
		}
		
	}
</script>

<style scoped lang="scss">
	.denglu2 {
		img {
			display: block;
			margin: 2rem auto 1rem;
			width: 2rem;
			height: 2rem;
		}
	}
	
	.denglu1 {
		input {
			outline: none;
			height: 1.5rem;
			width: 90%;
			display: block;
			margin: 0 auto 0.2rem;
			border-top: 0;
			border-left: 0;
			border-right: 0;
			border-bottom: 1px solid #EEEEEE;
		}
		div {
			width: 100%;
			text-align: center;
			button {
				height: 1.2rem;
				width: 40%;
				background: #FF5F16;
				border: 0;
				outline: none;
			}
		}
	}
</style>