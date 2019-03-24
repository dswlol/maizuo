<template>
	<div class="show">
		<div v-for="item in list">
			<div><img :src="item.banner"/></div>
			<section>
				<div><span>{{item.name}}</span><span>{{item.dimensional}}</span><span>{{item.score}}<span> 分</span></span></div>
				<div><span>{{item.type}}</span></div>
				<div><span>{{item.release}}上映</span></div>
				<div><span>{{item.country}}</span> | <span>{{item.duration}}分钟</span></div>
				<div :class="{'check':toggle}"><span>{{item.summary}}</span></div>
				<div @click="toggle=!toggle"><i v-if="toggle" class="fa fa-angle-down" aria-hidden="true"></i><i v-else class="fa fa-angle-up" aria-hidden="true"></i></div>
			</section>
			<div>
				<p>演职人员</p>
				<ul>
					<li v-for="(pic,index) in item.yy"><router-link to=""><img :src="pic"/><span>{{item.act[index]}}</span></router-link></li>
				</ul>
			</div>
			
			
		</div>
		<router-link to="" class="titck"><span>选票购座</span></router-link>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapActions,mapGetters} from 'Vuex'
	export default{
		data(){
			return{
				toggle:true,
				n:'',
				list:[]
			}
		},
		computed:{
			...mapState(["mz","now"])
		},
		watch:{
			$route:{
				handler(n){
					this.n=n.params.index
				},
				immediate:true
			}
		},
		created(){
			this.list.push(this.mz.now[this.n])
			console.log(this.list)
		}
	}
	
</script>

<style scoped lang="scss">
	.show{
		div{			
			div:nth-of-type(1){
				width: 100%;
				img{
					width: 100%;
					display: block;
					border-bottom: 2px solid #eee;
				}
			}
			section{
				padding: 0.4rem;
				font-size: 16px;
				border-bottom: 0.3rem solid #efefef;
				div:nth-of-type(1){
					display:flex;
					align-items: center;
					span:nth-of-type(1){
						font-size: 0.5rem;
						color: #191a1b;
						margin-right:0.2rem;
					}
					span:nth-of-type(2){
						font-size: 0.3rem;
						color: #fff;
	    				background-color: #d2d6dc;
	    				padding: 0 0.1rem;
					    border-radius: 2px;
					    display: inline-block;
					}
					span:nth-of-type(3){
						flex: 1;
						text-align: right;
						font-size: 0.5rem;
						color: #ffb232;
						font-style: italic;
						span{
							font-size: 0.2rem;
							color: #ffb232;
							font-style: normal;
						}
					}
				}
				div:nth-of-type(2){
					font-size: 0.4rem;
					color:#797d82;
					margin-top: 0.1rem;
				}
				div:nth-of-type(3){
					font-size: 0.4rem;
					color:#797d82;
					margin-top: 0.1rem;
				}
				div:nth-of-type(4){
					font-size: 0.4rem;
					color:#797d82;
					margin-top: 0.1rem;
					span:nth-of-type(2){
						font-size: 0.3rem;
					}
				}
				div:nth-of-type(5){
					margin-top: 0.4rem;
					font-size: 0.4rem;
					color: #797d82;					
					overflow: hidden;
				}
				div:nth-of-type(6){
					text-align: center;
					color: #797d82;	
				}
			}
			section+div{
				padding: 0.4rem;
				p{
					font-size: 0.5rem;
				}
				ul{
					/*设置横向滚动条*/
					width: 100%;
					white-space: nowrap;
					display: inline;
					overflow-x:scroll;
					float:left;
					margin-top: 0.4rem;
					li{
						 display:inline-block;
						 margin: 0 0.2rem;
						 text-align: center;
						img{
							width: 2.5rem;
							height: 2.5rem;
							display: block;
						}
						span{
							margin-top: 0.3rem;
							display: block;
							font-size: 0.3rem;
							color: #000;
						}
					}
				}
			}
			
		}
	}
	.check{
		height: 1.1rem;
	}
	.titck{
		display: block;
		width: 100%;
		text-align: center;
		box-sizing: border-box;
		padding: 0 0.3rem;	
		margin-top: 4rem;	
		margin-bottom: 2rem;	
		clear: both;
		span{
			display: block;
			color: #fff;
			background-color: #ff5f16;
			font-size: 0.8rem;
		}
	}
</style>