<template>
	<div>
		<header class="main-nav">
			<div class="logo"></div>
			<div id="menu-icon-wrapper" class="menu-icon-wrapper" style="visibility: hidden">
				<svg width="1000px" height="1000px">
					<path id="pathD" d="M 300 350 L 700 350 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
					<path id="pathE" d="M 300 500 L 700 500"></path>
					<path id="pathF" d="M 700 650 L 300 650 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
				</svg>
				<button id="menu-icon-trigger" class="menu-icon-trigger"></button>
			</div>
			<!-- menu-icon-wrapper -->
		</header>
		<div class="nav-wrapper">
			<nav class="nav-list">
				<a class="nav-item ">首页</a>
				<a class="nav-item">400套餐</a>
				<a class="nav-item">客户案例</a>
				<a class="nav-item">了解400</a>
				<a class="nav-item active">关于我们</a>
				<a class="nav-item">帮助中心</a>
				<a class="nav-item">其他咨询</a>
			</nav>
		</div>
		<swiper class="main-banner" :options="swiperOption">
			<swiper-slide><img src="../assets/img/banner01.jpg"/></swiper-slide>
			<swiper-slide><img src="../assets/img/banner01.jpg"/></swiper-slide>
			<swiper-slide><img src="../assets/img/banner01.jpg"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="hot-combo">
			<h2>推荐套餐</h2>
			<div class="combo-card">
				<h3>特推套餐</h3>
				<p>每天不到</p>
				<div class="price">
					<i>3</i>
					<em>元</em>
				</div>
				<div class="btn-wrapper">
					<button class="btn btn-primary">咨询办理</button>
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
					<a class="item-400">400-800-6107</a>
					<a class="item-400">400-800-6107</a>
					<a class="item-400">400-800-6107</a>
					<a class="item-400">400-800-6107</a>
					<a class="item-400">400-800-6107</a>
					<a class="item-400 link">更多号码</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'indexPage',
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		mounted() {
			console.log(12312);
			require('../../static/js/main.js')
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../styles/index";
	/* Menu icon styles */
	
	.dummy__item {
		-webkit-transition: -webkit-transform 0.5s;
		transition: transform 0.5s;
		-webkit-transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
		transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
	}
	
	.device--alt .dummy__item {
		-webkit-transform: translate3d(-100%, 0, 0) translate3d(-2em, 0, 0) scale3d(0.5, 1, 1);
		transform: translate3d(-100%, 0, 0) translate3d(-2em, 0, 0) scale3d(0.5, 1, 1);
		-webkit-transform-origin: 100% 50%;
		transform-origin: 100% 50%;
	}
	
	.dummy__item {
		-webkit-transform: translate3d(0, 100%, 0) scale3d(1, 0.2, 1);
		transform: translate3d(0, 100%, 0) scale3d(1, 0.2, 1);
	}
	
	.dummy--active .dummy__item {
		-webkit-transition-timing-function: cubic-bezier(0.56, 1.19, 0.2, 1.05);
		transition-timing-function: cubic-bezier(0.56, 1.19, 0.2, 1.05);
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
	
	.dummy__item:nth-child(4),
	.show .dummy__item:first-child {
		-webkit-transition-delay: 0.05s;
		transition-delay: 0.05s;
	}
	
	.dummy__item:nth-child(3),
	.show .dummy__item:nth-child(2) {
		-webkit-transition-delay: 0.1s;
		transition-delay: 0.1s;
	}
	
	.dummy__item:nth-child(2),
	.show .dummy__item:nth-child(3) {
		-webkit-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}
	
	.dummy__item:first-child,
	.show .dummy__item:nth-child(4) {
		-webkit-transition-delay: 0.2s;
		transition-delay: 0.2s;
	}
</style>