<template>
	<div>
		<swiper class="banner">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item)" /></swiper-slide>
		</swiper>
		<section class="flow">
			<h2 class="title">办理流程</h2>
			<div class="item" v-for="item in flowList" :key="item.key">
				<div class="img">
					<img :src="getImgUrl(item,false)" />
				</div>
				<h4>{{item.word}}</h4>
			</div>
			<div class="btn-wrapper">
				<a class="btn btn-outline" @click="showPanel">了解更多</a>
			</div>
		</section>
		<section class="help-center">
			<h2 class="title">办理流程</h2>
			<div class="item">
				<h4>热门业务问题</h4>
				<p v-for="item in QAList" :key="item.key">
					<a @click="articleClick(item.id)">
						<span>{{item.title}}</span>
					</a>
				</p>
			</div>
			<div class="item">
				<h4>其他资讯</h4>
				<p v-for="item in acticleList" :key="item.key">
					<a @click="articleClick(item.id)">
						<span>{{item.title}}</span>
					</a>
				</p>
			</div>
			<h3 class="title">没有找到答案？</h3>
			<div class="btn-wrapper">
				<a class="btn btn-outline" @click="showPanel">立即咨询</a>
			</div>
		</section>
	</div>
</template>

<script>
	
	export default {
		name: 'helpPage',
		data() {
			return {
				page:'help',
				bannerList:[],
				flowList:[],
				QAList:[],
				acticleList:[]
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
				this.API_getImgs({
					page: this.page,
					type: '2'
				}, (d) => {
					this.flowList = d.filter((item)=>{
						return item.word;
					});
					console.log(this.flowList);
				});
				this.API_getPageList({
					page: this.page,
					currentPage: 1,
					pageSize:5
				}, (d) => {
					this.QAList = d.list;
					console.log(this.QAList);
				});
				this.API_getPageList({
					page: 'acticle',
					currentPage: 1,
					pageSize:5
				}, (d) => {
					console.log(d);
					this.acticleList = d.list;
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
	@import "../styles/help";
</style>