<template>
	<div>
		<!--轮播-->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='item in pic'><router-link to="/"><img  v-bind:src="item.url"/></router-link></div>
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
	//引入轮播模块
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css'
	
	export default{
		data(){
			return{
				pic:[
					{
						url:require('../../assets/img/lb/one1.png')
					},
					{
						url:require('../../assets/img/lb/two.png')
					},
					{
						url:require('../../assets/img/lb/three.png')
					},
					{
						url:require('../../assets/img/lb/four.png')
					},
					{
						url:require('../../assets/img/lb/five.png')
					},
					{
						url:require('../../assets/img/lb/six.png')
					}
				]
			}
		},
		mounted(){
	        var mySwiper = new Swiper('.swiper-container', {
	          autoplay:true,
	          loop:true
	        })
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
		color: #ff5f16;
		border-bottom: 2px solid #ff5f16;
	}
	/*轮播设置*/
	.swiper-container{
		img{
			display: block;
			width: 100%;
		}
	}
</style>