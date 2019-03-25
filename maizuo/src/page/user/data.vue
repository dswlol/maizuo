<template>
	
	<div class="data">
		<div class="data1">
			<span><</span>
			<b>我的资料</b>
		</div>
		
		<div class="data2">		
			<ul>
				<li v-for="item in list">
					<span>{{item.nr}}</span>
					<b>{{item.sz}}</b>
					<i>{{item.span}}</i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		
		data(){
			return {
				list:[{"nr":"头像","sz":"未设置","span":">"},{"nr":"昵称","sz":"未设置","span":">"},{"nr":"性别","sz":"未设置","span":">"},{"nr":"出身日期","sz":"未设置","span":">"}]
			}
		}
	}
	
</script>

<style lang="scss" scoped>
.data{
	background: #f4f4f4;
	.data1{
		background: white;
		height: 1.5rem;
		line-height: 1.5rem;
		font-size: 0.6rem;
		color: #333333;
		text-align:center;
		margin-bottom:0.35rem;
		span{
			float: left;
			margin-left: 0.4rem;
		}
		b{
			font-weight: 100;
		}
	}
	
	.data2{
		background: white;
		font-size: 0.5rem;		
		padding-left: 0.3rem;
		li{
			height: 1.5rem;
			line-height: 1.5rem;
			display: flex;
			justify-content: space-between;
			width: 100%;
			border-bottom: 1px solid #EEEEEE;
			span{
				flex: 1;
			}
			b{
				font-weight: 100;
				font-size: 0.4rem;
				color: #CCCCCC;
			}
			i{
				margin-left: 0.3rem;
				margin-right: 0.3rem;
				font-style: normal;
				font-size: 0.4rem;
				color: #CCCCCC;
			}
		}
	}
}

</style>