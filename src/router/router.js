
import indexPage from '@/pages/index.vue';
import comboPage from '@/pages/combo.vue';
import cooperationPage from '@/pages/cooperation.vue';
import knowPage from '@/pages/know.vue';
import contactPage from '@/pages/contact.vue';

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
        name: 'index',
        title: '首页',
        component: indexPage
    },
    {
        path: '/combo',
        name: 'combo',
        title: '400套餐',
        component: comboPage
    },
    {
        path: '/cooperation',
        name: 'cooperation',
        title: '客户案例',
        component: cooperationPage
    },
    {
        path: '/know',
        name: 'know',
        title: '了解400',
        component: knowPage
    },
    {
        path: '/contact',
        name: 'contact',
        title: '关于我们',
        component: contactPage
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    ...appRouter
];
