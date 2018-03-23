
import {appRouter} from '@/router/router';



const app = {
    state: {
        baseUrl:'http://www.400ring.com/',
        imgBaseUrl:'http://www.400ring.com//style/images/fimages/',
		blogroll:[],
		appRouter:appRouter[0]
    },
    mutations: {
        setTagsList (state, list) {
            state.tagsList.push(...list);
        }
    }
};

export default app;
