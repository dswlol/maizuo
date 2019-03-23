<template>
	<div class="users">
		<div class="user1">
			<div>
				<img src="../../assets/img/user/1.png" />
				<router-link to="/home/user/denglu">注册登录</router-link>
			</div>
		</div>
		<div class="indent">
			<ul>
				<li>
					<router-link to="/home/user/denglu">
						<img src="../../assets/img/user/2.png" />
						<p>电影订单</p>
					</router-link>
				</li>
				<li>
					<router-link to="/home/user/denglu">
						<img src="../../assets/img/user/3.png" />
						<p>拼团订单</p>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="list">
			<ul>
				<li v-for="item in list">
					<router-link to="/home/user/denglu">
						<img :src="item.url"/>
						<span>{{item.nr}}</span>
						<b>{{item.wz}}</b>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="sss"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					{
						url:require('../../assets/img/user/4.png'),
						nr:'卖座卡',
						wz:'>'
					},
					{
						url:require('../../assets/img/user/5.png'),
						nr:'组合红包',
						wz:'>'
					},
					{
						url:require('../../assets/img/user/6.png'),
						nr:'余额',
						wz:'>'
					},
					{
						url:require('../../assets/img/user/7.png'),
						nr:'设置',
						wz:'>'
					}
				]
			}
		}
	}
	
</script>

<style lang="scss" scoped>	
	.users{
		background: #f4f4f4;
	}
	.user1 {
		background: url(../../assets/img/user/8.png);
		background-size: 100% 100%;
		padding-left: 0.8rem;
		padding-top: 1.8rem;
		padding-bottom: 1.4rem;
	}
	
	.user1 img {
		border-radius: 50%;
		width: 2.3rem;
		height: 2.3rem;
	}
	
	.user1 a {
		font-size: 0.55rem;
		color: white;
		margin-left: 0.6rem;
	}
	
	.user1 div {
		display: flex;
		align-items: center;
	}
	
	.indent{	
		margin-bottom: 0.3rem;
		ul{
			width: 100%;
			background: #fff;
			li{
				margin-top: 0.5rem;
				display: inline-block;
				width: 48%;
				text-align: center;
				margin-bottom: 0.5rem;
				a{
					width: 100%;
					height: 100%;
					display: block;
					color: #666;
					font-size: 0.4rem;
					img{
						width: 1rem;
						height: 1rem;
					}
				}	
				p{
					margin-top: 0.1rem;
				}			
			}
		}
	}
	
	.list{
		background: white;
		margin-bottom: 5rem;
		ul{
			padding-left: 0.5rem;
			li{
				height: 1.65rem;
				border-bottom: 1px solid #f1f1f1;	
				a{
					height: 100%;
					display: flex;
					align-items: center;				
					color: #333;
					font-size: 0.5rem;
					img{
						margin-right: 0.3rem;
						width: 0.7rem;
						height: 0.7rem;
					}
					b{
						font-style: normal;
						margin-right: 0.5rem;
						color: #ccc;
					}
					span{
						flex: 1;
					}
				}				
			}
		}		
	}
	.sss{
		height: 0.01rem;
	}
</style>