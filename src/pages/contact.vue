<template>
	<div>
		<swiper class="banner">
			<swiper-slide v-for="item in bannerList" :key="item.key"><img :src="getImgUrl(item)" /></swiper-slide>
		</swiper>
		<h1 class="title">关于我们</h1>
		<div class="content">
			    成立于2005年，是中国移动、中国联通、中国电信的战略合作伙伴。大府信息以优秀的企业文化，携手三大运营商贯彻落实国家"以信息化带动工业化"的战略部署，积极推动政府信息化与企业信息化建设。大府以400电话作为平台与载体，与政府机关、企事业单位联合建设各行业信息化应用.在全国范围为各类型事业体与企业体提供人性化、可信赖的400产品与服务，搭建连接供应方与需求方的信息舞台，承担推动信息化进程的社会责任。在与时俱进的创新发展中，大府建立系统高效的新产品研发体系，积极向用户提供"内容+应用+接入+服务"的一揽子通信服务.
		</div>
		<section class="advantage">
			<h2>我们的优势</h2>
			<div class="item" v-for="item in advantage" :key="item.key">
				<div class="img">
					<img :src="getImgUrl(item)" />
				</div>
				<h4>{{item.title}}</h4>
				<p>{{item.word}}</p>
			</div>
		</section>
		<section class="license">
			<h2>荣誉资质</h2>
			<p>用实力服务客户，与客户共同成长</p>
			<div class="item">
				<img src="../assets/img/license01.jpg"/>
				<p>增值电信业务运营许可证</p>
			</div>
			<div class="item">
				<img src="../assets/img/license02.jpg"/>
				<p>企业营业执照</p>
			</div>
			<div class="item">
				<img src="../assets/img/license03.jpg"/>
				<p>诚信认证</p>
			</div>
		</section>
		<section class="contact">
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
	export default {
		name: 'contactPage',
		data() {
			return {
				page:'about',
				bannerList:[],
				advantage:[],
				contact:[]
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
					this.advantage = d;
				});
				this.API_getImgs({
					page: this.page,
					type: '3'
				}, (d) => {
					console.log(d);
					this.contact = d;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/contact";
</style>