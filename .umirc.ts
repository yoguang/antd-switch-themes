import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
	},
	base:'/',
	publicPath: '/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
