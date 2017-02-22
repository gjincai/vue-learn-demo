const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
]

const router = new VueRouter({
	routes
})
//渲染模板
var app = new Vue({
	router
}).$mount('.routerVue');










