<template>
	<div>
		<div class="one" v-for="(item,index) in list" :key="index">
			<router-link to="/home/go">
				<div class="div1">
					<img :src="item.z" alt="">
				</div>
				<div class="div2">
					<p class="p1">{{item.x}}</p>
					<p class="p2">{{item.c}}</p>
					<div class="div3">
						<span class="y">￥</span><span class="sp1">{{item.v}}</span>  	<span class="sp2">原价￥{{item.b}}</span>
						<span class="l">
							<span class="sp3">
								<img :src="item.n" alt="">
							</span>
							<span class="sp4">
								<img :src="item.m" alt="">
							</span>
						</span>
						<router-link to="/home/go">去拼单</router-link>
					</div>
				</div>
			</router-link>
		</div>
		
		<div class="tow">
			<span>我是有底线的</span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[
				{z:'https://mall.s.maizuo.com/765e4d9fede5dc48198282e2f2d75297.jpg?x-oss-process=image/quality,Q_70',
				x:'小熊安迪卡通指甲钳',
				c:'轻巧便携 锋利耐用 加固轴头',
				v:'9.9',
				b:'12.9',
				n:require('@/assets/img/ly/1.jpg'),
				m:require('@/assets/img/ly/2.jpg')},
				{z:require('@/assets/img/ly/3.jpg'),
				x:'湖北中华红血橙 5斤装 (60-70mm)',
				c:'享誉"橙中皇后"鲜甜饱满多汁 国家地标性品种',
				v:'28.9',
				b:'37.9',
				n:require('@/assets/img/ly/4.jpg'),
				m:require('@/assets/img/ly/5.jpg')},
				{z:require('@/assets/img/ly/6.jpg'),
				x:'新疆和田特级骏枣 2斤装',
				c:'优选基地直供 树上自然挂干 肉厚饱满 软糯甜蜜',
				v:'25.3',
				b:'32.9',
				n:require('@/assets/img/ly/7.jpg'),
				m:require('@/assets/img/ly/8.jpg')},
				{z:require('@/assets/img/ly/9.jpg'),
				x:'柳州鲜香螺蛳粉 300g*1',
				c:'传统制粉手艺 甄选多重原料 地道广西风味',
				v:'13',
				b:'15.9',
				n:require('@/assets/img/ly/10.jpg'),
				m:require('@/assets/img/ly/11.jpg')},
				{z:require('@/assets/img/ly/12.jpg'),
				x:'雅诗兰黛 净颜透澈卸妆乳',
				c:'【香港直邮】 3*30ml/支  深层清洁卸妆 温和不刺激 净莹清爽',
				v:'68',
				b:'82',
				n:'',
				m:require('@/assets/img/ly/13.jpg')},
				{z:require('@/assets/img/ly/14.jpg'),
				x:'雅诗兰黛 肌透修护洁面乳',
				c:'【香港直邮】 2*30ml/支    清洁SPA洗净污垢 洗后保湿不紧绷',
				v:'23',
				b:'27.8',
				n:require('@/assets/img/ly/15.jpg'),
				m:require('@/assets/img/ly/16.jpg')},
				{z:require('@/assets/img/ly/17.jpg'),
				x:'一亩塘 金银花茶 25g',
				c:'乡野手工烘制 茶香沁润爽口 形态饱满无添加',
				v:'25',
				b:'32',
				n:'',
				m:require('@/assets/img/ly/18.jpg')},
				{z:require('@/assets/img/ly/20.jpg'),
				x:'一亩塘 玫瑰花蕾茶 50g',
				c:'手工严选原材料 馥郁自然香气 淡雅清甜回甘',
				v:'23',
				b:'32',
				n:require('@/assets/img/ly/21.jpg'),
				m:require('@/assets/img/ly/19.jpg')},
				{z:require('@/assets/img/ly/22.jpg'),
				x:'一亩塘 玫瑰花蕾茶 50g',
				c:'手工严选原材料 馥郁自然香气 淡雅清甜回甘',
				v:'23',
				b:'29.9',
				n:require('@/assets/img/ly/23.jpg'),
				m:require('@/assets/img/ly/24.jpg')},
				{z:require('@/assets/img/ly/25.jpg'),
				x:'比思达 免手洗平板拖把桶',
				c:'底板搓衣板结构 换布不费力 坚固耐用 清洁好帮手',
				v:'139',
				b:'159',
				n:'',
				m:require('@/assets/img/ly/26.jpg')},
				{z:require('@/assets/img/ly/27.jpg'),
				x:'五双装 女士精梳棉圆点船袜',
				c:'亲肤精梳棉面料 泡泡花立体袜口 舒适耐穿不松垮',
				v:'29',
				b:'45.9',
				n:require('@/assets/img/ly/28.jpg'),
				m:require('@/assets/img/ly/29.jpg')},
			]
		}
	}
}
</script>

<style>
	.one{
		background: #f4f4f4;
		padding-bottom: .5rem;
	}
	.div1{
		line-height: 0;
	}
	.div1 img{
		width: 100%;
	}
	.div2{
		width: 100%;
		background: #fff;
	}
	.div2 .p1{
		font-size: .5rem;
		padding: .5rem .5rem 0;
		color: #191a1b;
	}
	.div2 .p2{
		font-size: .43rem;
		padding: 0 .5rem;
		line-height: .85rem;
		color: #797d82;
	}
	.div2 .l{
		position: relative;
		margin: .5rem;
	}
	.div2 .div3{
		padding: .2rem .5rem .5rem;
	}
	.div2 .div3 .y{
		font-size: .6rem;
		color: #c03131;
	}
	.div2 .div3 .sp1{
		font-size: .7rem;
		line-height: .7rem;
		color: #c03131;
	}
	.div2 .div3 .sp2{
		font-size: .4rem;
		color: #bdc0c5;
		text-decoration: line-through
	}
	.div2 .div3 .sp3{
		width: 1rem;
		height: 1rem;
		position: absolute;
		display: inline-block;
	}
	.div2 .div3 .sp4{
		width: 1rem;
		height: 1rem;
		position: absolute;
		left: .7rem;
		display: inline-block;
	}
	.div2 .div3 .sp3 img{
		width: 100%;
		height: 100%;
		z-index: 100;
		border-radius: 50%;
	}
	.div2 .div3 .sp4 img{
		width: 100%;
		height: 100%;
		z-index: -1;
		border-radius: 50%;
	}
	.div2 .div3 a{
		float: right;
		font-size: .5rem;
		width: 3rem;
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		background: #c03131;
		color: #fff;
		border-radius: .1rem;
	}


	.tow{
		width: 100%;
		text-align: center;
		background: #f4f4f4;
		margin-bottom: 1.45rem;
	}
	.tow span{
		display: block;
		font-size: .3rem;
		line-height: 1rem;
		color: #ccc;
	}
</style>