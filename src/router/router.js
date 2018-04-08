
import Main from '@/components/main.vue';

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
	{
        path: '/',
        name: 'home',
        title: '主页',
        redirect: '/index',
        component: Main,
        children: [
        	{
		        path: '/index',
		        name: 'index',
		        title: '首页',
		        component: () => import('@/pages/index.vue') 
		    },
		    {
		        path: '/combo',
		        name: 'combo',
		        title: '400套餐',
		        component: () => import('@/pages/combo.vue') 
		    },
		    {
		        path: '/cooperation',
		        name: 'cooperation',
		        title: '客户案例',
		        component: () => import('@/pages/cooperation.vue') 
		    },
		    {
		        path: '/know',
		        name: 'know',
		        title: '了解400',
		        component: () => import('@/pages/know.vue') 
		    },
		    {
		        path: '/contact',
		        name: 'contact',
		        title: '关于我们',
		        component: () => import('@/pages/contact.vue') 
		    },
		    {
		        path: '/help',
		        name: 'help',
		        title: '帮助中心',
		        component: () => import('@/pages/help.vue') 
		    },
		    {
		        path: '/article-list',
		        name: 'article-list',
		        title: '资讯列表',
		        component: () => import('@/pages/article-list.vue') 
		    },
		    {
		        path: '/article/:article_id',
		        name: 'article',
		        title: '资讯详情',
		        hide:true,
		        component: () => import('@/pages/article.vue') 
		    }
       ]
    } 
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    ...appRouter
];
