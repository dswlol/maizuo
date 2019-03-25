<template>
	<div @click="backpage"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
</template>

<script>
export default{
	methods:{
		backpage(){
			this.$router.go(-1)
		}
	}
}
</script>

<style>

</style>