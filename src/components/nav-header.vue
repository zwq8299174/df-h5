<template>
	<div class="main-nav-wrapper">
		<header class="main-nav" ref="mainNav">
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
		<section class="nav-wrapper">
			<nav class="nav-list">
				<a class="nav-item ">首页</a>
				<a class="nav-item">400套餐</a>
				<a class="nav-item">客户案例</a>
				<a class="nav-item">了解400</a>
				<a class="nav-item active">关于我们</a>
				<a class="nav-item">帮助中心</a>
				<a class="nav-item">其他咨询</a>
			</nav>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'nav-header',
		data() {
			return {
				
			}
		},
		mounted() {
//			alert(this.$refs.mainNav.offsetHeight);
			require('../../static/js/main.js')
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/header";
</style>