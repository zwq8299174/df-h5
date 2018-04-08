<template>
	<footer>
		<div class="item">
			<p class="title">业务</p>
			<p><router-link to="/know">了解400</router-link></p>
			<p><router-link to="/combo">套餐介绍</router-link></p>
		</div>
		<div class="item">
			<p class="title">公司</p>
			<p><router-link to="/contact">关于我们</router-link></p>
			<p><router-link to="/cooperation">客户案例</router-link></p>
		</div>
		<div class="item">
			<p class="title">帮助</p>
			<p><router-link to="/help">帮助中心</router-link></p>
			<p><router-link to="/article-list">其他资讯</router-link></p>
		</div>
		<div class="item full">
			<p class="title">友链</p>
			<p class="list">
				<a v-for="item in blogroll" :key="item.key" href="item.url">{{item.name}}</a>
			</p>
		</div>
		<div class="item full copyright">
			<p>大府信息 版权所有 严禁复制 2000-2016        
			<p>上海市长宁区茅台路1068号天祥大厦501-507</p>  
			<p>备案号：沪IC备11032290-3</p>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'nav-footer',
		data() {
			return {
				blogroll:this.$store.state.app.blogroll?this.$store.state.app.blogroll:[]
			}
		},
		created() {
			this.getData();
		},
		methods: {
			getData(){
				if(this.blogroll.length!=0) return;
				this.API_getCodes((d) => {
					this.blogroll = d;
					this.$store.state.app.blogroll = d;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/footer";
</style>