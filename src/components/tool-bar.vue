<template>
	<div class="toolbar fn-clear">
		<a class="service" @click="showPanel">
			<i class="icon">&#xe644;</i>
			客服
		</a>
		<a class="consult" @click="phone">
			<i class="icon">&#xe64c;</i>
			咨询业务
		</a>
	</div>
</template>

<script>
	export default {
		name: 'tool-bar',
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			phone(){
				window.location.href='tel:'+this.$store.state.app.numbers[0].word;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/tool-bar";
</style>