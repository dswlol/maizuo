<template>
	<div class="denglu">
		<div class="denglu2">
			<img src="../../assets/img/user/9.png"/>
		</div>
		<div class="denglu1">
			<input type="text" v-model="name"/>
			<input type="text" v-model="pwd"/>
			<div>
				<button @click="dl">登录</button>
				<button @click="zc">注册</button>			
			</div>			
		</div>		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				name:'',
				pwd:''
			}
		},
		created(){
			this.$axios.get("/users").then((res)=>{
				console.log(res)
			})			
		},
		methods:{
			dl(){
				console.log(1)
			},
			zc(){
				this.$axios.post("/adduser",{
					"name":this.name,
					"pwd":this.pwd
				},{
					headers:{
						'Content-Type': 'application/json;charset=UTF-8'
					}
			})
		}
			}
	}
</script>

<style scoped lang="scss">
	.denglu2{
		img{			
			display: block;
			margin: 2rem auto 1rem;
			width: 2rem;
			height: 2rem;
		}	
	}
	.denglu1{		
		input{
			display: block;
			margin: 0 auto 0.2rem;
		}
		
	}
	
</style>