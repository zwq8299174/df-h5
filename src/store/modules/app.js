
import {appRouter} from '@/router/router';



const app = {
    state: {
        baseUrl:'http://400ring.com',
        imgBaseUrl:'http://400ring.com/style/images/fimages/',
		blogroll:[],
		appRouter:appRouter[0],
		loading:false,
		numbers:[]
    },
    mutations: {
        setTagsList (state, list) {
            state.tagsList.push(...list);
        }
    }
};

export default app;
