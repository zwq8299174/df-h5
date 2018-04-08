<template>
	<div>
		<swiper class="main-banner" :options="swiperOption">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item)" /></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<section class="hot-combo block">
			<h2>推荐套餐</h2>
			<div class="combo-card">
				<h3>{{hotCombo.title}}</h3>
				<p>{{hotCombo.name}}</p>
				<div class="price">
					<i>{{hotCombo.fwords}}</i>
					<em>{{hotCombo.swords}}</em>
				</div>
				<div class="btn-wrapper">
					<a class="btn btn-light" @click="showPanel">咨询办理</a>
				</div>
				<span class="tag">限时免费</span>
			</div>
			<div class="detail">
				<h3 class="title">剩余时间</h3>
				<count-down></count-down>
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
					<a class="item-400 link" @click="showPanel">更多号码</a>
				</div>
			</div>
		</section>
		<section class="advantage block">
			<h2>我们的优势</h2>
			<div class="item" v-for="item in advantage" :key="item.key">
				<div class="img">
					<img :src="getImgUrl(item)" />
				</div>
				<h4>{{item.title}}</h4>
				<p>{{item.word}}</p>
			</div>
			<div class="btn-wrapper">
				<router-link class="btn btn-outline" to="/contact">查看详情</router-link>
			</div>
		</section>
		<section class="cooperation block">
			<h2>企业信赖的合作伙伴</h2>
			<h4>累计超过 <i class="color-primary bold">100万</i> 家商户使用了 <i class="color-primary bold">400电话服务</i></h4>
			<div class="company-wrapper"></div>
			<div class="btn-wrapper">
				<router-link class="btn btn-outline" to="/cooperation">更多客户案例</router-link>
			</div>
		</section>
		<section class="introduce block">
			<h2>400功能介绍</h2>
			<h4>实际需求定制、附赠功能、高效搭建</h4>
			<p>根据企业实际需求定制，您所想到的功能，均能支持.</p>
			<p>附赠的语音菜单、排队等待、智能报号评价等无数功能，</p>
			<p>致力帮助企业快速高效的搭建完整400体系以及客户管理系统.</p>
			<div class="btn-wrapper">
				<router-link class="btn btn-light" to="/know">功能详情</router-link>
			</div>
		</section>
		<section class="combo block">
			<h2>400精选号码套餐</h2>
			<swiper class="combo-wrapper" :options="comboOption" ref="comboSwiper">
				<swiper-slide v-for="combo in comboList" :key="combo.key">
					<div class="combo-card active">
						<div class="card-header">{{combo.title}}</div>
						<div class="card-content">
							<h3>{{combo.fwords}}</h3>
							<count-down class="small"></count-down>
							<div class="intro">
								{{combo.twords}}
							</div>
							<div class="btn-wrapper">
								<a class="btn btn-outline" @click="showPanel">立即预约赠话费</a>
							</div>
						</div>
						<span class="tag">限时套餐</span>
					</div>
				</swiper-slide>
			</swiper>
		</section>
		<section class="contact block">
			<h2>联系我们</h2>
			<div class="item" v-for="item in contact" :key="item.key">
				<div class="img">
					<img :src="getImgUrl(item)" />
				</div>
				<h4>{{item.title}}</h4>
				<div class="btn-wrapper">
					<a class="btn btn-outline" :href="'tel:'+item.word">{{item.word}}</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import countDown from '@/components/countdown.vue';
	
	export default {
		name: 'indexPage',
		components:{
			countDown	
		},
		data() {
			return {
				imgBaseUrl: this.$store.state.app.imgBaseUrl,
				page: 'index',
				bannerList: [],
				comboList: [],
				advantage: [],
				numbers: [],
				contact:[],
				hotCombo:{},
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					}
				},
				comboOption: {
					effect: 'coverflow',
					slidesPerView: 3,
					centeredSlides: true,
					coverflowEffect: {
						rotate: 30,
						stretch: 10,
						depth: 60,
						modifier: 2
					}
				}
			}
		},
		created() {
			this.getPackage();
			this.getData();
		},
		computed: {
			swiper() {
				return this.$refs.comboSwiper.swiper
			}
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
					this.advantage = d;
				});
				this.API_getImgs({
					page: 'about',
					type: '3'
				}, (d) => {
					console.log(d);
					this.contact = d;
				});
				this.API_getNumbers((d) => {
					console.log(d);
					this.numbers = d;
					this.$store.state.app.numbers = d;
				});
			},
			getPackage() {
				this.API_getPackage({
					page: this.page,
					type: '1'
				}, (d) => {
					console.log(d);
					this.comboList = d;
					this.swiper.slideTo(1, 1000, false);
				});
				this.API_getPackage({
					page: this.page,
					type: '0'
				}, (d) => {
					if(d&&d.length>0){
						this.hotCombo = d[0];
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/index";
</style>