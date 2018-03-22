
export default {
	data() {
		return {

		}
	},
	methods: {
		getImgUrl(item,isMobile){
			let mobileSuffix = isMobile?'_mobile.':'.';
			return this.$store.state.app.imgBaseUrl+item.url+mobileSuffix+item.suffix;
		}
	}
}