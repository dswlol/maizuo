<template>
  <div class="home">
    <router-view/>
    <!--home导航栏-->
    <ul>
    	<!--<li><router-link to='/'><i class="fa fa-instagram" aria-hidden="true"></i><span>电影</span></router-link></li>
			<li><router-link to='/home/cinema'><i class="fa fa-th" aria-hidden="true"></i><span>影院</span></router-link></li>
			<li><router-link to='/home/shop'><i class="fa fa-shopping-basket" aria-hidden="true"></i><span>特惠</span></router-link></li>
			<li><router-link to='/home/user'><i class="fa fa-user-o" aria-hidden="true"></i><span>我的</span></router-link></li>-->
			<li v-for="(item,index) in home" @click="changeColor(index)"><router-link v-bind:to='item.tolink' v-bind:class="{ys:item.color}"><i v-bind:class="item.i" aria-hidden="true"></i><span>{{item.name}}</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    	home:[
    		{
    			i:"fa fa-instagram",
    			name:"电影",
    			tolink:"/",
    			color:true
    		},
    		{
    			i:"fa fa-th",
    			name:"影院",
    			tolink:"/home/cinema",
    			color:false
    		},
    		{
    			i:"fa fa-shopping-basket",
    			name:"特惠",
    			tolink:"/home/shop",
    			color:false
    		},
    		{
    			i:"fa fa-user-o",
    			name:"我的",
    			tolink:"/home/user",
    			color:false
    		}
    	]
    }
  },
  methods:{
  	//改变当前点击导航栏颜色方法
  	changeColor(n){
  		for(var i= 0;i<this.home.length;i++){
  				this.home.forEach((item)=>item.color=false)
  				this.home[n].color=true
  		}
  	}
  }
}
</script>

<style scoped>
	ul{
		position: fixed;
		width: 100%;
		bottom: 0;	
		display: flex;
		text-align: center;	
		border-top: 1px solid #eee;
	}
	ul li{
		flex: 1;
	}
	ul li a{
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		color: #797d82;
	}
	.ys{
		color: #ff5f16;
	}
</style>
