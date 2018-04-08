<template>
	<div>
		<nav-header></nav-header>
		<router-view></router-view>
		<nav-footer></nav-footer>
		<tool-bar></tool-bar>
		<loader v-if="$store.state.app.loading" :loading="$store.state.app.loading"></loader>
	</div>
</template>

<script>
	import navHeader from '@/components/nav-header';
	import navFooter from '@/components/nav-footer';
	import toolBar from '@/components/tool-bar';
	import loader from '@/components/loader';
	
	export default {
		name: 'Main',
		components:{
			loader,
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