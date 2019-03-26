<template>
	<div class="denglu">
		<div class="denglu2">
			<img src="../../assets/img/user/9.png"/>
		</div>
		<div class="denglu1">
			<input type="text" v-model="name" placeholder="用户名" @blur="zcc"/>
			<input type="text" v-model="pwd" 	placeholder="密码"/>
			<div>
			<button @click="zc">注册</button>						
										
			</div>			
		</div>		
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import qs from "qs"
	export default {
		data(){
			return{
				name:'',
				pwd:'',
			}
		},
		methods: {
			zcc(){
				this.$axios.get("http://47.102.208.83:3000/findName",{params:{
					"name": this.name
				}}).then((res)=>{
					if(res.data.data.length!=0){
						Toast({
						  	message: '用户名已注册',
						  	position: 'middle',
						  	duration: 2000
						});
					}
			})
		},
			
			zc(){
				this.$axios.get("http://47.102.208.83:3000/findName",{params:{
					"name": this.name,
				}}).then((res)=>{
					if(res.data.data.length!=0){
						Toast({
						  	message: '用户名已注册',
						  	position: 'middle',
						  	duration: 2000
						});
					}else{
						this.$axios.get("http://47.102.208.83:3000/adduser", {params:{
					"name": this.name,
					"pwd": this.pwd
				}}).then((res)=>{
						// location.href="http://localhost:8080/#/home/user/denglu"
						this.$router.go(-1);			
			})
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
		div{
			width: 100%;
			text-align: center;
			button{
				height: 1.2rem;
				width: 80%;
				background: #FF5F16;
				border: 0;
				outline: none;
			}
		}
	}
</style>