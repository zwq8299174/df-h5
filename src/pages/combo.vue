<template>
	<div>
		<swiper class="banner">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item,true)" /></swiper-slide>
		</swiper>
		<section class="hot-combo">
			<h2>推荐套餐</h2>
			<div class="combo-card">
				<h3>特推套餐</h3>
				<p>每天不到</p>
				<div class="price">
					<i>3</i>
					<em>元</em>
				</div>
				<div class="btn-wrapper">
					<a class="btn btn-light">咨询办理</a>
				</div>
				<span class="tag">限时免费</span>
			</div>
			<div class="detail">
				<h3 class="title">剩余时间</h3>
				<div class="countdown-wrapper">
					
				</div>
				<h3 class="title">超值福利</h3>
				<div class="weal-wrapper">
					<div class="weal-item">
						<i class="icon">&#xe65d;</i>
						<span>送双倍话费</span>
					</div>
					<div class="weal-item">
						<i class="icon">&#xe65d;</i>
						<span>14项400功能礼包</span>
					</div>
					<div class="weal-item">
						<i class="icon">&#xe65d;</i>
						<span>立得限量购物卡</span>
					</div>
				</div>
				<h3 class="title">400电话</h3>
				<div class="wrapper-400">
					<a class="item-400" v-for="item in numbers" :key="item.key">{{item.number}}</a>
					<a class="item-400 link">更多号码</a>
				</div>
			</div>
		</section>
		<section class="combo-wrapper">
			<div class="combo-card" v-for="(item,index) in comboList" :key="item.key">
				<div class="card-header" :class="{medal:index==2||index==3,luxury:index==4||index==5}"><i class="icon">&#xe63c;</i>{{item.title}}</div>
				<div class="card-content">
					<p class="desc">{{item.name}}</p>
					<h3><i>{{item.fwords}}</i><span>{{item.swords}}</span></h3>
					<div class="intro" v-html="item.twords"></div>
					<div class="btn-wrapper">
						<a class="btn btn-outline">咨询办理</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'comboPage',
		data() {
			return {
				page:'package',
				comboList:[],
				numbers:[],
				bannerList:[]
			}
		},
		created() {
			console.log(this.$store.state.app.appRouter);
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
				this.API_getNumbers((d) => {
					this.numbers = d;
				});
				this.API_getPackage({
					page: this.page,
					type: '1'
				}, (d) => {
					console.log(d);
					this.comboList = d;
				});
				this.API_getPackage({
					page: this.page,
					type: '2'
				}, (d) => {
					console.log(d);
					
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/combo";
</style>

