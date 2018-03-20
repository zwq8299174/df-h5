<template>
	<div>
		<swiper class="main-banner" :options="swiperOption">
			<swiper-slide><img src="../assets/img/banner01.jpg"/></swiper-slide>
			<swiper-slide><img src="../assets/img/banner01.jpg"/></swiper-slide>
			<swiper-slide><img src="../assets/img/banner01.jpg"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<section class="hot-combo block">
			<h2>推荐套餐</h2>
			<div class="combo-card">
				<h3>特推套餐</h3>
				<p>每天不到</p>
				<div class="price">
					<i>3</i>
					<em>元</em>
				</div>
				<div class="btn-wrapper">
					<a class="btn btn-light" href="http://www.css88.com/book/css/values/length/vh.htm">咨询办理</a>
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
		</section>
		<section class="advantage block">
			<h2>我们的优势</h2>
			<div class="item">
				<i class="icon">&#xe64a;</i>
				<h4>10万家</h4>
				<p>客户好评，多年品质如一</p>
			</div>
			<div class="item">
				<i class="icon">&#xe646;</i>
				<h4>一级授权资质</h4>
				<p>移动、联通、电信一级授权</p>
			</div>
			<div class="item">
				<i class="icon">&#xe64b;</i>
				<h4>600万</h4>
				<p>号码资源</p>
			</div>
			<div class="item">
				<i class="icon">&#xe644;</i>
				<h4>7*24小时</h4>
				<p>售后服务</p>
			</div>
			<div class="btn-wrapper">
				<a class="btn btn-outline">查看详情</a>
			</div>
		</section>
		<section class="cooperation block">
			<h2>企业信赖的合作伙伴</h2>
			<h4>累计超过 <i class="color-primary bold">100万</i> 家商户使用了 <i class="color-primary bold">400电话服务</i></h4>
			<div class="company-wrapper"></div>
			<div class="btn-wrapper">
				<a class="btn btn-outline">更多客户案例</a>
			</div>
		</section>
		<section class="introduce block">
			<h2>400功能介绍</h2>
			<h4>实际需求定制、附赠功能、高效搭建</h4>
			<p>根据企业实际需求定制，您所想到的功能，均能支持.</p>
			<p>附赠的语音菜单、排队等待、智能报号评价等无数功能，</p>
			<p>致力帮助企业快速高效的搭建完整400体系以及客户管理系统.</p>
			<div class="btn-wrapper">
				<a class="btn btn-light">功能详情</a>
			</div>
		</section>
		<section class="combo block">
			<h2>400精选号码套餐</h2>
			<div class="combo-wrapper">
				<div class="combo-card small">
					<div class="card-header">热销版</div>
					<div class="card-content">
						<h3>4</h3>
						<p class="desc">元/月</p>
						<div class="countdown-wrapper">
							
						</div>
						<div class="intro">
							折合4元每天；无任何增收费用、一次投入、长期使用；双倍话费赠送
						</div>
						<div class="btn-wrapper">
							<a class="btn btn-outline">功能详情</a>
						</div>
					</div>
					<span class="tag">限时套餐</span>
				</div>
				<div class="combo-card small">
					<div class="card-header">热销版</div>
					<div class="card-content">
						<h3>4</h3>
						<p class="desc">元/月</p>
						<div class="countdown-wrapper">
							
						</div>
						<div class="intro">
							折合4元每天；无任何增收费用、一次投入、长期使用；双倍话费赠送
						</div>
						<div class="btn-wrapper">
							<a class="btn btn-outline">功能详情</a>
						</div>
					</div>
					<span class="tag">限时套餐</span>
				</div>
				<div class="combo-card active">
					<div class="card-header">热销版</div>
					<div class="card-content">
						<h3>4</h3>
						<p class="desc">元/月</p>
						<div class="countdown-wrapper">
							
						</div>
						<div class="intro">
							折合4元每天；无任何增收费用、一次投入、长期使用；双倍话费赠送
						</div>
						<div class="btn-wrapper">
							<a class="btn btn-primary">功能详情</a>
						</div>
					</div>
					<span class="tag">限时套餐</span>
				</div>
			</div>
			<div class="btn-wrapper">
				<a class="btn btn-outline active">功能详情</a>
			</div>
		</section>
		<section class="contact block">
			<h2>联系我们</h2>
			<div class="item">
				<i class="icon">&#xe637;</i>
				<h4>售前热线</h4>
				<div class="btn-wrapper">
					<a class="btn btn-outline" href="http://www.baidu.com">400-699-0555</a>
				</div>
			</div>
			<div class="item">
				<i class="icon">&#xe638;</i>
				<h4>售后热线</h4>
				<div class="btn-wrapper">
					<a class="btn btn-outline">400-698-7983</a>
				</div>
			</div>
			<div class="item">
				<i class="icon">&#xe640;</i>
				<h4>渠道热线</h4>
				<div class="btn-wrapper">
					<a class="btn btn-outline">400-103-7000</a>
				</div>
			</div>
		</section>
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
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@import "../styles/index";
</style>