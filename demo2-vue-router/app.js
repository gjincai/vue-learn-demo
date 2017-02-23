const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
	template: '<div>User: {{ $route.params.id }}</div>'
}
const Find = {
	template: '<div>Find: {{ $route.params }}</div>'
}

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar },
	{ path: '/user', component: User },
	{ path: '/user/:id', component: User},	//'/user/:id',冒号之后不能有空格
	{ path: '/find/:class/post/:post_id', component: Find}	//'/user/:id',冒号之后不能有空格
]

const router = new VueRouter({
	routes
})
//渲染模板
var app = new Vue({
	router
}).$mount('.routerVue');










