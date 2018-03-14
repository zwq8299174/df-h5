import HelloWorld from '@/components/HelloWorld.vue';


// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
	{
        path: '/',
        name: 'home',
        title: '主页',
        redirect: '/index'
    },
	{
        path: '/index',
        name: 'workbench',
        title: '个人信息',
        component: HelloWorld
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    ...appRouter
];
