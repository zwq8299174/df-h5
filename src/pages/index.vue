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
			</div><!-- menu-icon-wrapper -->
		</header>
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
</template>

<script>
	
	export default {
		name: 'indexPage',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted(){
			console.log(12312);
			require('../../static/js/main.js')
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	@import "../styles/index";
	/* Menu icon styles */
	
	.menu-icon-wrapper {
		position: relative;
		display: inline-block;
		width: 42px;
		height: 42px;
		margin-right: 28px;
		pointer-events: none;
		transition: 0.1s;
	}
	
	.menu-icon-wrapper.scaled {
		-webkit-transform: scale(0.5);
		-ms-transform: scale(0.5);
		transform: scale(0.5);
	}
	
	.menu-icon-wrapper svg {
		position: absolute;
		top: -33px;
		left: -33px;
		-webkit-transform: scale(0.1);
		-ms-transform: scale(0.1);
		transform: scale(0.1);
		-webkit-transform-origin: 0 0;
		-ms-transform-origin: 0 0;
		transform-origin: 0 0;
	}
	
	.menu-icon-wrapper svg path {
		stroke: #666;
		stroke-width: 60px;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: transparent;
	}
	
	.menu-icon-wrapper .menu-icon-trigger {
		position: relative;
		width: 100%;
		height: 100%;
		cursor: pointer;
		pointer-events: auto;
		background: none;
		border: none;
		margin: 0;
		padding: 0;
	}
	
	.menu-icon-wrapper .menu-icon-trigger:hover,
	.menu-icon-wrapper .menu-icon-trigger:focus {
		outline: none;
	}
	
	
	
	
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