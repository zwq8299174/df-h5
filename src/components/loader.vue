<template>
	<div class="loading-wrapper">
		<bounce-loader :loading="loading"></bounce-loader>
	</div>
</template>

<script>
	import BounceLoader from '@/components/bounce-loader';
	
	export default {
		name: 'loader',
		components:{
			BounceLoader
		},
		props: {
			loading: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			}
		},
		created() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.loading-wrapper{
		position: fixed;top:0;left:0;right: 0;bottom: 0;background-color: rgba(255,255,255,.8);display: flex;justify-content: center;align-items: center;z-index:9999;
	}
</style>