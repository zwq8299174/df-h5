



const app = {
    state: {
        cachePage: [],
        lang: '',
        isFullScreen: false,
        openedSubmenuArr: [], // 要展开的菜单数组
        menuTheme: 'light', // 主题
        themeColor: '',
        pageOpenedList: [{
            title: '首页',
            path: '',
            name: 'home_index'
        }],
		currentNav:'',
        currentPageName: '',
        currentPath: [
            {
                title: '首页',
                path: '',
                name: 'home_index'
            }
        ], // 面包屑数组
        menuList: [],
		navList:[],
		pageSize:10,
        messageCount: 0,
        dontCache: ['text-editor', 'artical-publish'] // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
    },
    mutations: {
        setTagsList (state, list) {
            state.tagsList.push(...list);
        }
    }
};

export default app;
