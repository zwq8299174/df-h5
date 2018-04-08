<template>
	<div>
		<swiper class="banner">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item)" /></swiper-slide>
		</swiper>
		<h1 class="title">400电话的功能</h1>
		<div class="desc-list">
			<div class="item" v-for="item in descList" :key="item.key">
				<div class="icon">
					<img :src="getImgUrl(item)" />
				</div>
				<div class="txt-wrapper">
					<h2>{{item.title}}</h2>
					<div class="txt">
						{{item.word}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'knowPage',
		data() {
			return {
				page:'comprehend',
				bannerList:[],
				descList:[]
			}
		},
		created() {
			this.getData();
		},
		methods: {
			getData() {
				this.API_getImgs({
					page: this.page,
					type: '1'
				}, (d) => {
					console.log(d);
					this.bannerList = d;
				});
				this.API_getImgs({
					page: this.page,
					type: '2'
				}, (d) => {
					console.log(d);
					this.descList = d;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/know";
</style>