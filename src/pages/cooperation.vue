<template>
	<div>
		<section class="banner">
			<h2>一个好的400电话号码</h2>
			<h2>能为您的企业增光添彩</h2>
		</section>
		<h1 class="title">哪些成功企业在用400业务</h1>
		<div class="merchant">
			<p class="head">行业案例</p>
			<div class="class-list">
				<a class="active">全部</a>
			</div>
			<div class="merchant-list">
				<div class="item" v-for="item in merchantList">
					<div class="img">
						<img :src="'../../assets/img/'+item.logo"/>
					</div>
					<h4>{{item.name}}</h4>
					<p>{{item.number}}</p>
					<div class="btn-wrapper">
						<a class="btn btn-outline" @click="showPanel">了解详情</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cooperationPage',
		data() {
			return {
				merchantList:[
					{
						name:'太平洋保险'	,
						namber:'400-****-2750',
						logo:'cr01.jpg'
					},
					{
						name:'百度'	,
						namber:'400-****-8888',
						logo:'cr02.jpg'
					},
					{
						name:'华泰证券'	,
						namber:'400-****-1616',
						logo:'cr03.jpg'
					},
					{
						name:'北汽龙威'	,
						namber:'400-****-6218',
						logo:'cr04.jpg'
					},
					{
						name:'华为'	,
						namber:'400-****-6888',
						logo:'cr05.jpg'
					},
					{
						name:'国家电网'	,
						namber:'400-****-8006',
						logo:'cr06.jpg'
					}
				]
			}
		},
		mounted() {
			console.log(12312);
			
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/cooperation";
</style>