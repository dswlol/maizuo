<template>
	
	<div class="more">
		
		<div class="more0" v-for="item in list[0]" v-if="n==0">
			<div>
				{{item.name}}
			</div>			
			<div>
				<img :src="item.url" />
				<p>{{item.p}}</p>
				<span>{{item.a}}</span>
			</div>
		</div>
		
		<div class="more1" v-for="item in list[1]" v-if="n==1">			
			<div>{{item.name}}</div>
			<div>
				<img :src="item.url" />
				<p>{{item.p}}</p>
			</div>		
		</div>
		
		<div class="more2" v-for="item in list[2]" v-if="n==2">
			<div>{{item.name}}</div>
			<div>
				<p>{{item.a}}</p>
				<p>{{item.dol}}</p>
			</div>
			<div>
				<img :src="item.url" />
				<p>{{item.p}}</p>
			</div>
		</div>
		<div class="more31">
			<div class="more3" v-for="item in list[3]" v-if="n==3">
			<div>{{item.name}}</div>
			<div>
				<span>{{item.p}}</span>
				<span>{{item.span}}</span>				
			</div>
			
			<div>
				<p>
					<span>{{item.psw}}</span>
					<span>{{item.a}}</span>
					<i>{{item.jt}}</i>
				</p>
				<p>
					<span>{{item.pswd}}</span>
					<span>{{item.a}}</span>
					<i>{{item.jt}}</i>
				</p>
			</div>
			
			<div>
				<p>
					<span>{{item.bb}}</span>
					<span>{{item.jt}}</span>
				</p>
				<p>
					<span>{{item.idea}}</span>
					<span>{{item.jt}}</span>
				</p>
			</div>
			<div>
				<p>
					<span>{{item.cooki}}</span>
					<span>{{item.jt}}</span>
				</p>
			</div>
		</div>
		</div>
		
		
		<div class="more4"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				n:"",
				list:[				
					[{
						name:"卖座卡",
						url:require('../../assets/img/user/12.png'),
						p:"您还没有卖座卡哟~",
						a:"激活新卡"
					}],
					[{
						name:"组合红包",
						url:require('../../assets/img/user/13.png'),
						p:"没有组合红包~",
					}],
					[{
						name:"余额明细",
						url:require('../../assets/img/user/14.png'),
						p:"暂无余额使用明细",
						a:"当前余额",
						dol:"￥0.00"
					}],
					[{
						name:"设置",
						p:"账号ID",
						span:"123456",
						a:"未设置",
						psw:"登录密码",
						pswd:"安全密码",
						idea:"意见反馈",
						bb:"软件版本",
						cooki:"清楚缓存",
						jt:">"
					}],
				],
				list1:[]
			}
		},
		
		watch:{
			$route:{
				handler(n){
					this.n=n.params.index
					this.list1=this.list[this.n]
				},
				immediate:true
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.more{
		
		.more0{
			div:nth-of-type(1){
				font-size: 0.58rem;
				text-align: center;
				margin-top: 0.4rem;
			}
			div:nth-of-type(2){
				margin-top: 5rem;
				text-align: center;
				font-size: 0.5rem;
				color: #bdc0c5;
				img{
					width: 3.3rem;
					height: 3.3rem;
					margin-bottom: 0.2rem;
				}
				span{					
					margin: 0.8rem auto 0;
					width: 5rem;
					height: 1rem;
					line-height: 1rem;
					border: 1px solid #ff5f16;
					display: block;
					color: #ff5f16;
				}
			}
		}
		.more1{
			div:nth-of-type(1){
				font-size: 0.58rem;
				text-align: center;
				border-bottom: 1px solid #EEEEEE;
				height: 1.5rem;
				line-height: 1.5rem;
			}
			div:nth-of-type(2){
				margin-top: 5rem;
				text-align: center;
				font-size: 0.5rem;
				color: #bdc0c5;
				img{
					width: 3rem;
					height: 3.3rem;
					margin-bottom: 0.3rem;
				}
			}
		}
		.more2{
			div:nth-of-type(1){
				font-size: 0.58rem;
				text-align: center;
				height: 1.5rem;
				line-height: 1.5rem;
			}
			div:nth-of-type(2){
				overflow: hidden;
				height: 4.7rem;
				background: #ff5f16;
				p:nth-of-type(1){
					margin-top: 1.5rem;
					color: white;
					font-size: 0.45rem;
					text-align: center;
					margin-bottom: 0.1rem;
				}
				p:nth-of-type(2){
					color: white;
					font-size: 1rem;
					text-align: center;
				}
			}
			div:nth-of-type(3){
				margin-top: 3rem;
				text-align: center;
				font-size: 0.5rem;
				color: #bdc0c5;
				img{
					width: 3rem;
					height: 3.3rem;
					margin-bottom: 0.3rem;
				}
			}
		}
		.more31{
			background: #F4F4F4;
			.more3{
			div:nth-of-type(1){
				font-size: 0.58rem;
				text-align: center;
				height: 1.5rem;
				line-height: 1.5rem;
				background: white;
				margin-bottom: 0.3rem;
			}
			div:nth-of-type(2){
				background: white;
				display: flex;
				justify-content: space-between;
				font-size: 0.5rem;
				height: 1.5rem;
				line-height: 1.5rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				margin-bottom: 0.3rem;
			}
			div:nth-of-type(3){
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				background: white;
				margin-bottom: 0.3rem;
				p{
					display: flex;
					justify-content: space-between;
					font-size: 0.5rem;
					height: 1.7rem;
					line-height: 1.7rem;
					border-bottom: 1px solid #EEEEEE;
				}
				span:nth-of-type(1){
					flex: 1;
				}
				span:nth-of-type(2){
					font-size: 0.4rem;
					color: #666666;
				}
				i{
					font-style: normal;
					margin-left: 0.3rem;				
				}
			}
			div:nth-of-type(4){
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				background: white;
				margin-bottom: 0.3rem;
				p{
					display: flex;
					justify-content: space-between;
					font-size: 0.5rem;
					height: 1.7rem;
					line-height: 1.7rem;
					border-bottom: 1px solid #EEEEEE;
				}
			}
			div:nth-of-type(5){
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				background: white;
				margin-bottom: 0.3rem;
				p{
					display: flex;
					justify-content: space-between;
					font-size: 0.5rem;
					height: 1.7rem;
					line-height: 1.7rem;
				}
			}
		}
		}
		
		.more4{
			height: 1px;
			margin-top: 6rem;
		}		
	}
	
</style>