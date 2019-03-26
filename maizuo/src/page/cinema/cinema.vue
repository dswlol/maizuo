<template>
	<div id="">
		<header>
			<nav>
				<li>重庆</li>
				<li>影院</li>
				<li><img src="../../assets/img/cinema/glass.png"/></li>
			</nav>
		</header>
		<section>
			<div id="">
				全城
			</div>
			<div>
				最近去过
			</div>
		</section>
		<ul  v-infinite-scroll="throttle(loadMore,1000)"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
			<li v-for="(item,index) in list" class="box" :key="index">
				<router-link :to="'/home/detail/'+index">
				<div class="left">
					<p class="zi">{{item.name}}</p>
					<p>{{item.address}}</p>
				</div>
				<div class="right">
					<p><span>￥</span>33<span>起</span></p>
					<p>1.36km</p>
				</div>
				</router-link>
				<router-view></router-view>
			</li>
		</ul>
	</div>
</template>

<script>
import { InfiniteScroll,Toast } from 'mint-ui';
	import axios from "axios"
	export default{
		data(){
			return{
				list:[],
				loading:false,
				page:1
			}
		},
		methods:{
			throttle(handler,wait){
				 var lasttime=0;
				 return ()=>{
					 var curent=+new Date();
					 if(curent-lasttime>wait){
						 handler.apply(this, arguments);
						 lasttime=curent;
					 }
				 }
			},
			loadMore(){
				if(this.page.length>=14){
					Toast({
					message:'已经到底了!!!',
					position: 'middle',
					duration: 1500
					});
					return;
				}
				var t=Toast({
				  iconClass:'fa fa-spinner fa-pulse',
				  position: 'middle',
				  duration: -1
				});
				this.loading=true;
				axios.get("http://47.102.208.83:3000/findalls",{params:{
					 _page:this.page,
					 _limit:15
				}}
				).then((res)=>{
						 this.loading=false;
						 this.page++;
                         t.close();
						 this.list=this.list.concat(res.data);  
			  })	

			}
		}
	}
</script>

<style scoped>
	nav li{
		list-style: none;
		font-size: 18px;
	}
	nav{
		display: flex;
		justify-content: space-between;
		padding: 10px 15px;
	}
	nav li:nth-of-type(3){
		width: 18px;
		height: 18px;
	}
	img{
		width: 100%;
		
	}
	section{
		vertical-align: middle;
		display: flex;
		border-bottom: 1px solid #ededed;
		padding: 10px 0;
	}
	section div{
		width: 50%;
		text-align:center;
		font-size: 14px;
	}
	a{
		display: flex;
		justify-content: space-between;
		padding: 15px;
		border-bottom: 1px solid #ededed;
		cursor: pointer;
	}
	.left p:nth-of-type(1){
		font-size: 15px;
		overflow: hidden;
	}
	.left p:nth-of-type(2){
		font-size: 12px;
		color: #797D82;
		width: 230px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.right p:nth-of-type(1){
		font-size: 15px;
		color: #FF5F16;
		text-align: right;
	}
	.right p:nth-of-type(2){
		font-size: 12px;
		color: #797D82;
	}
	.zi{
		color: #333;	
	}
	p{
		line-height: .8rem;
	}
	p span{
		font-size: .4rem;
	}
</style>