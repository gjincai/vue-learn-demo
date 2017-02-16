//本地数据localStorage
var DB_KEY = 'todo-vue';	//本地数据库名称
var todoDb = {
	fetch: function(){
		var todos = JSON.parse(window.localStorage.getItem(DB_KEY) || '[]');
		todos.forEach(function(todo, index){
			todo.id = index;
		});
		todoDb.uid = todos.length;
		// console.log('fetch成功：');
		return todos;
	},
	save: function(todos){
		if(todos){
			window.localStorage.setItem(DB_KEY,JSON.stringify(todos));
			console.log('save成功：');
		}else{
			console.log('save失败：todos参数不能为空');
		}
	}
};
//todoDb测试
// console.log(todoDb);
// todoDb.save();
// var todos = [
// 	{title: 'todo1', done: true},
// 	{title: 'todo2', done: false},
// 	{title: 'todo3', done: true},
// ];
// todoDb.save(todos);
console.log(todoDb.fetch());
//过滤筛选
var filters = {
	all: function(todos){
		return todos;
	},
	undone: function(todos){
		return todos.filter(function(todo){
			return !todo.done;
		});
	},
	done: function(todos){
		return todos.filter(function(todo){
			return todo.done;
		});
	},
	hashSet: function(){
		//获取当前url的hash值；若存在，则将该值赋给vue的app.visibility;
		//若不存在，则设置默认值all
		var visibilityUrl = window.location.hash.replace(/#\/?/, '');
		if(filters[visibilityUrl]){
			app.visibility = visibilityUrl;
			console.log(app.visibility);
		}else{
			window.location.hash = '';
			app.visibility = 'all';
			// console.log(app.visibility);
		}
	}
};

console.log(filters.undone(todoDb.fetch()));
//渲染模板
var app = new Vue({
	el: '.todovue',
	data: {
		todos: todoDb.fetch(),
		newtodo: '',
		visibility: 'done'
	},
	watch: {
		todos: {
			handler: function(todos){
				todoDb.save(todos);
			},
			deep: true
		}
		// todos: function(todos,old){
		// 	console.log('todos change');
		// 	console.log(todos);
		// 	console.log(old);
		//	todoDb.save(todos);
		//	console.log(todoDb.fetch());
		// }
	},
	computed: {
		filteredTodos: function(){
			// return filters.undone(this.todos);
			return filters[this.visibility](this.todos);	//疑问
		},
	},
	methods: {
		addTodo: function(){
			console.log('addTodo');
			var value = this.newtodo && this.newtodo.trim();
			if(!value){
				console.log('newtodo空');
				return;
			}
			console.log(value);
			this.todos.push({
				id: todoDb.uid++,
				title: value,
				done: false
			});
			this.newtodo = '';
			console.log(this.todos);
			console.log(todoDb.fetch());
			console.log(filters.undone(this.todos));
		}
	}
});
// app.$mount('.todovue');
window.addEventListener('hashchange', filters.hashSet());
filters.hashSet();









