const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
	template: '<div>User: {{ $route.params.id }}</div>'
}
const Find = {
	template: '<div>Find: {{ $route.params }}</div>'
}
const Name = {
	template: '<div>Name: {{ $route.params }}</div>'
}

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar },
	{ path: '/user', component: User },
	{ path: '/user/:id', component: User},	//'/user/:id',冒号之后不能有空格
	{ path: '/find/:class/post/:post_id', component: Find},	//'/user/:id',冒号之后不能有空格
	{ path: '/name/nameId', name: 'namerouter', component: Name}
]

const router = new VueRouter({
	routes
})
//渲染模板
var app = new Vue({
	router
}).$mount('.routerVue');


const Index = { template: '<div>Index</div>' }
const Other1 = { template: '<div>Other1</div>' }
const Other2 = { template: '<div>Other2</div>' }

const router2 = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: Index,
        a: Other1,
        b: Other2
      }
    },
    {
      path: '/other',
      components: {
        default: Other2,
        a: Other1,
        b: Index
      }
    }
  ]
})

var app2 = new Vue({
	router2
}).$mount('.routerVue2');










