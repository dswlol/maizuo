<template>
	<div class="users">
		<div class="user1">
			
				<router-link to="/home/user/data">
					<div>
						<img src="../../assets/img/user/1.png" />
						<span>{{names}}</span>
					</div>
				</router-link>
				
			
		</div>
		<div class="indent">
			<ul>
				<li>
					<router-link to="/home/user/data">
						<img src="../../assets/img/user/2.png" />
						<p>电影订单</p>
					</router-link>
				</li>
				<li>
					<router-link to="/home/user/data">
						<img src="../../assets/img/user/3.png" />
						<p>拼团订单</p>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="list">
			<ul>
				<li v-for="(item,index) in list">
					<router-link :to="'/home/user/more/'+index">
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
		created(){
			this.names=sessionStorage.getItem("name")
		},
		data(){
			return {
				names:'',
				list:[
					{
						url:require('../../assets/img/user/4.png'),
						nr:'卖座卡',
						wz:'>',
						id:'0'
					},
					{
						url:require('../../assets/img/user/5.png'),
						nr:'组合红包',
						wz:'>',
						id:'1'
					},
					{
						url:require('../../assets/img/user/6.png'),
						nr:'余额',
						wz:'>',
						id:'2'
					},
					{
						url:require('../../assets/img/user/7.png'),
						nr:'设置',
						wz:'>',
						id:'3'
					}
				]
			}
		}
	}	
</script>

<style scoped lang="scss">
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
	}
	
	.user1 div {
		display: flex;
		align-items: center;
	}
	.user1 span{
		margin-left: 0.5rem;
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