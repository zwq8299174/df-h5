

export default {
	data() {
		return {

		}
	},
	methods: {
		API_login(data,suc){
			this.post('demoserver/a/login', data).then((d) => {
				suc(d);
			});
		},
		API_logout(suc){
			this.post('demoserver/a/logout').then((d) => {
				suc(d);
			});
		},
		API_getDataList(data,suc){
			this.post('demoserver/a/test/testData/qryTestDataListByCon',data).then((d) => {
				suc(d);
			});
		},
		API_getDetail(id,suc){
			console.log(id);
			this.post('demoserver/a/test/testData/qryTestDataById',{
				id:id
			}).then((d) => {
				suc(d);
			});
		},
		API_savaData(data,suc){
			this.post('demoserver/a/test/testData/saveTestData',data).then((d) => {
				suc(d);
			});
		},
		API_delData(id,suc){
			this.post('demoserver/a/test/testData/deleteTestData',{
				id:id
			}).then((d) => {
				suc(d);
			});
		}
	}

}
