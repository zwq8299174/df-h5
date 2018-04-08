<template>
	<div>
		<swiper class="main-banner">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item)" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<section class="article-content">
			<h1>{{content.title}}</h1>
			<p class="time">{{content.date}}</p>
			<div class="content" v-html="content.text">
				
			</div>
			<p class="article-info">本文由大府信息400电话业务中心提供</p>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'articlePage',
		data() {
			return {
				id:this.$route.params.article_id,
				content:{}
			}
		},
		created() {
			console.log(this.$route.params.article_id);
			this.getData();
		},
		updated:  function(){
			setTimeout(()=>{
				this.$store.state.app.loading = false;
			},500);
		},
		methods: {
			getData() {
				this.API_getActicle(this.id, (d) => {
					console.log(d);
					this.content = d;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/article";
</style>