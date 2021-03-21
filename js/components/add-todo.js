export default class AddTodo{
    constructor(){
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback){
        this.btn.onclick = () => {
            this.validate(callback)
        }
    }

    validate = (callback) => {
        if(title.value === '' || description.value === ''){
            console.error('Incorrecto');
        }else{
            callback(this.title.value, this.description.value);
        }
        // alert.classList.add('d-none');
    }
}