<template>
	<div>
		<nav-header></nav-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
		<tool-bar></tool-bar>
	</div>
</template>

<script>
	import navHeader from '@/components/nav-header';
	import navFooter from '@/components/nav-footer';
	import toolBar from '@/components/tool-bar';
	
	
	export default {
		name: 'Main',
		components:{
			navHeader,
			navFooter,
			toolBar
		},
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	
</style>