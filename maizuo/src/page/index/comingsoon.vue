<template>
	<div>
		<ul class="show">
			<li v-for="item in mz.now">
				<router-link :to="'/home/detail/'+item.id">
					<div><img :src="item.url"/></div>
					<div class="right">
						<div><span>{{item.name}}</span><span>{{item.dimensional}}</span></div>
						<div>观众评分：<span>{{item.score}}</span></div>
						<div>主演：<span v-for="items in item.act">{{items}} </span></div>
						<div><span>{{item.country}}</span> | <span>{{item.duration}}分钟</span></div>
					</div>
					<div class="buy">
						<router-link to="">购票</router-link>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapActions,mapGetters} from 'Vuex'
	export default{
		data(){
			return{
			}
		},
		computed:{
			...mapState(["mz","now"])
		}
	}
</script>

<style scoped lang="scss"> 
	.show{
		margin-bottom: 2rem;
		li{	
			padding: 0.4rem 0.4rem 0.4rem 0;
			margin-left: 0.4rem;
			border-bottom: 1px solid #eee;
			a{
				display: flex;
				img{
					width: 2rem;
					height: 2.7rem;
				}
				.right{
					flex: 1;
					padding:0.2rem 0 0.4rem 0.4rem;
					div:nth-of-type(1){
						display: flex;
						align-items: center;
						font-size:0.5rem;
						span:nth-of-type(1){
							display: block;
							color: #191a1b;
						}
						span:nth-of-type(2){
							display: inline-block;
							font-size: 0.3rem;
						    color: #fff;
						    background-color: #d2d6dc;
						    height: 0.4rem;
						    line-height: 0.4rem;
						    padding: 0 0.1rem;
						    margin-left: 0.1rem;
						    border-radius: 2px;
						}
					}
					div:nth-of-type(2){
						font-size:0.4rem;
						color:#797d82;
						span{
							color:#ffb232;
							font-size: 0.4rem;
						}
					}
					div:nth-of-type(3){
						width:6rem;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						font-size:0.4rem;
						color:#797d82;
					}
					div:nth-of-type(4){
						font-size: 0.4rem;
						color:#797d82;
					}
				}
				.buy{
					display: flex;
					align-items: center;
					a{
						font-size: 0.3rem;
					    border: 1px solid #ff5f16;
					    padding:0.1rem 0.2rem;
					    border-radius: 0.1rem;
					    color:#ff5f16 ;
					}
				}
			}
			
			
		}
		
	}
</style>