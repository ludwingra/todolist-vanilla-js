export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentId = !this.todos || this.todos.length < 1 ? 0 : this.todos[this.todos.length - 1].id + 1;
    }

    setView(view){
        this.view = view;
    }

    saveData() {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }

    getTodo(){
      return this.todos;  
    }

    toogleCompleted(id){
        let index = this.findIndexById(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);

        this.saveData();
        return {...todo};
    }

    removeTodo(id){
        let index = this.findIndexById(id);
        this.todos.slice(index,1);
        this.saveData();
    }

    findIndexById(id){
        return this.todos.findIndex((todo) => todo.id == id);
    }
}