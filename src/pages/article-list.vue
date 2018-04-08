<template>
	<div>
		<swiper class="main-banner">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item)" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<section class="article-list">
			<ul>
				<li v-for="item in articleList" :key="item.key">
					<a @click="articleClick(item.id)">
						<span>{{item.title}}</span>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'articleListPage',
		data() {
			return {
				imgBaseUrl: this.$store.state.app.imgBaseUrl,
				page: 'acticle',
				bannerList: [],
				articleList:[],
				loading:true
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
					this.bannerList = d;
				});
				this.API_getPageList({
					page: this.page,
					currentPage: 1,
					pageSize:500
				}, (d) => {
					console.log(d);
					this.articleList = d.list;
				});
			},
			articleClick(id){
				this.$router.push({ path: '/article/'+id });
				this.$store.state.app.loading = true;
			}
		}
	}
</script>


<style lang="scss" scoped>
	@import "../styles/article-list";
</style>