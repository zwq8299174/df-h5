import axios from 'axios';
import Qs from 'qs';



export default {
	data() {
		return {

		}
	},
	methods: {
		request(config){
			const AJAX = new Promise((resolve, reject) => {
				axios(config).then((d) => {
					if (d.status == 200 && d.data.code=='1') {
						resolve(d.data.data);
					} else {
						if(d.data.code==-1){
							this.$store.commit('logout', this);
		                    this.$store.commit('clearOpenedSubmenu');
		                    this.$router.push({
		                        name: 'login'
		                    });
						}else{
							reject(d);
						}
					};
				}).catch((e) => {
					reject(e);
				});
			});
			return AJAX;
		},
		post(path, data,opts) {
			let CancelToken = axios.CancelToken;
			let source = CancelToken.source();
			let defaults = {
				data: data,
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				},
				baseURL: this.$store.state.app.baseUrl,
				method: 'post',
				url: path,
				timeout: 15 * 60 * 1000,
				cancelToken: source.token
			};
			let options = Object.assign(defaults,opts?opts:{});
			return this.request(options);
		},
		get(path, params) {
			console.log(this.$store.state.app.imgBaseUrl);
			let options = {
				params: params,
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				},
				baseURL: this.$store.state.app.baseUrl,
				method: 'get',
				url: path,
				timeout: 15 * 60 * 1000
			};
			return this.request(options);
		}
	}

}
