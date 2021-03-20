// Evento que solo se dispara hasta que el html se haya cargado, llenado
document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const table = document.getElementById('table');
    const alert = document.getElementById('alert');
    const btn = document.getElementById('add');

    const validate = () => {
        if(title.value === '' || description.value === ''){
            alert.classList.remove('d-none');
            alert.innerText = 'Titulo y descripción son requeridos';
            return;
        }
        alert.classList.add('d-none');
    }

    function addTodo(){
        validate();

        const row = table.insertRow();
        row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger')
    }

    btn.onclick = addTodo;
});

