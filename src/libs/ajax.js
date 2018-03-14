import axios from 'axios';
import Qs from 'qs';

const BASEURL = 'http://134.0.133.191:8888/';

export default {
	data() {
		return {

		}
	},
	methods: {
		request(config){
			const AJAX = new Promise((resolve, reject) => {
				axios(config).then((d) => {
					if (d.status == 200 && d.data.rspCode==0) {
						resolve(d.data.rspData);
					} else {
						if(d.data.rspCode==-1){
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
			// let requestData = path.indexOf('login')>-1?Qs.stringify(data):requestFormat;
			let defaults = {
				data: data,
				headers: path.indexOf('login')>-1?{
					'X-Requested-With': 'XMLHttpRequest',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}:{
					'Content-Type': 'application/json; charset=UTF-8'
				},
				baseURL: BASEURL,
				method: 'post',
				url: path,
				timeout: 15 * 60 * 1000,
				cancelToken: source.token
			};
			let options = Object.assign(defaults,opts?opts:{});
			return this.request(options);
		},
		get(path, params) {
			let options = {
				params: params,
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				},
				baseURL: BASEURL,
				method: 'get',
				url: path,
				timeout: 15 * 60 * 1000
			};
			return this.request(options);
		}
	}

}
