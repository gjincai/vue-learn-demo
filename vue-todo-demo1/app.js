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
//渲染模板
var app = new Vue({
	el: '.todovue',
	data: {
		todos: todoDb.fetch(),
		newtodo: ''
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
         //    todoDb.save(todos);
         //    console.log(todoDb.fetch());
		// }
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
				done: true
			});
			this.newtodo = '';
			console.log(this.todos);
			console.log(todoDb.fetch());

		}
	}
});
// app.$mount('.todovue');









