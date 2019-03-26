<template>
	<div>			
		<div v-for="(item,key,index) in list">
			<p :ref="key">{{key}}</p>
			<section>
				<router-link :to="'/home/index/'+items.name" v-for="items in item">{{items.name}}</router-link >
			</section>
		</div>	
		<ul>
			<li v-for="item in list2" @click="go(item)">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				n:"",
				list:[], 
				list2:[]
			}
		},
		created(){
			//发请求
			this.$axios.get("http://47.102.208.83:3000/findCities").then((res)=>{
				this.list=res.data.cities

				//数据排序
				this.list.sort((a,b)=>{
					return a["pinyin"]>b["pinyin"]?1:-1
				})				
				//生成26个字母
				for(var i=65;i<=90;i++){
					var z=String.fromCharCode(i).toUpperCase()
					if(z!="I" && z!="O" && z!="V" && z!="U")
					this.list2.push(z)
				}
				//对排好序的装在数组中的数据对象进行foreach遍历，将数据对象拼音的首字母当作键，如果存在，给继续给当前键中压入item，如果不存在，走else，把当前拼音首字母当作键，把当前item当成数组复制给键，成为键值对
				var obj={}		
				this.list.forEach((item)=>{
					if(obj[item.pinyin.slice(0,1).toUpperCase()]){
						obj[item.pinyin.slice(0,1).toUpperCase()].push(item)
					}else{
						obj[item.pinyin.slice(0,1).toUpperCase()]=[item]
					}
				})
				this.list=obj		
				console.log(this.list)
			})
			
	},
	methods:{
		//点击跳转
		go(n){
			var z=this.$refs[n][0].offsetTop;
			var root=document.documentElement || document.body
			root.scrollTop=z-100
		}
	}
}
</script>

<style scoped>
	div{
		margin-bottom: 2rem;
	}
	p{
		padding: 0.5rem;
		height:0.2rem;
		line-height:0.2rem;
		font-size: 12px;
		text-align: left;
		background:#f4f4f4;
		color: #797d82;;
	}
	a{
		display: inline-block;
		box-sizing: border-box;
		font-size: 12px;
		width: 33.33%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: #fff;
		color: #000;
	}
	section{
		display: flex;
		flex-wrap: wrap;
	}
	ul{
		list-style: none;
		position: fixed;
		font-size: 12px;
		top: 150px;
		right: 5px;
		color: #000;
		text-align: center;
	}
</style>