

export default {
	data() {
		return {

		}
	},
	methods: {
		API_getImgs(data,suc){
			this.get('getImgs.php', data).then((d) => {
				suc(d);
			});
		},
		API_getPackage(data,suc){
			this.get('getPackage.php', data).then((d) => {
				suc(d);
			});
		},
		API_getNumbers(suc){
			this.get('getNumbers.php').then((d) => {
				suc(d);
			});
		},
		API_getCodes(suc){
			this.get('getCodes.php').then((d) => {
				suc(d);
			});
		}
	}

}
