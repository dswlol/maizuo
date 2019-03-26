<template>
	<div>
		<router-link class="position" to="/home/position"><i class="fa fa-dot-circle-o" aria-hidden="true"> {{city}} </i></router-link>
		<!--轮播-->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='item in mz.pic'><router-link to="/"><img  v-bind:src="item.url"/></router-link></div>
		    </div>
		</div>
		<!--导航-->
		<ul class="nav">
			<li><router-link to='/home/index/nowplaying'><span>正在热播</span></router-link></li>
			<li><router-link to='/home/index/comingsoon'><span>即将上映</span></router-link></li>
		</ul>
		<router-view/>
	</div>
	
</template>

<script>
	
	//映射数据
	import {mapState,mapMutations,mapActions,mapGetters} from 'Vuex'
	
	//引入轮播模块
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css'
		
	export default{
		data(){
			return{
				city:'重庆'
			}
		},
		computed:{
			...mapState(["mz","pic"])
		},
		mounted(){
			//轮播
	        var mySwiper = new Swiper('.swiper-container', {
	          autoplay:true,
	          loop:true
	        })
	   },
	   methods:{
	   		citypsin(){
	   			if(this.$route.params.city){
	   				this.city=this.$route.params.city
	   			}
	   			
	   		}
	   },
	   created(){
	   		this.citypsin();
	   }
	  
	}
</script>

<style scoped lang="scss">
	/*设置导航样式*/
	.nav{
		display: flex;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
		li{
			flex: 1;
			text-align: center;
			font-size: 0.4rem;
			a{
				display: block;
					span{
					color:#191a1b;
					display: inline-block;
					padding-bottom: 0.4rem;
					padding-top: 0.4rem;
				}
			}
			
		}
	}
	.router-link-exact-active span{
		color: #ff5f16!important;
		border-bottom: 2px solid #ff5f16;
	}
	/*轮播设置*/
	.swiper-container{
		img{
			display: block;
			width: 100%;
		}
	}
	/*定位*/
	.position{
		    position: absolute;
		    top: 18px;
		    left: 7px;
		    color: #fff;
		    z-index: 10;
		    font-size: 13px;
		    background: rgba(0,0,0,.2);
		    height: 30px;
		    line-height: 30px;
		    border-radius: 15px;
		    text-align: center;
		    padding: 0 5px;
	}
</style>