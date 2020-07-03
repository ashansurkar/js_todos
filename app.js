const correctAnswers = [
    'B','B','B','B'
];
const result = document.querySelector('.result');
const list =document.querySelector('.todos');
const form = document.querySelector('.add');
const search = document.querySelector('.search input');

const genTemplate = (todo) =>{
    if (todo){
        if(list.firstElementChild){
            let newli = list.firstElementChild.cloneNode(true);
            newli.querySelector('span').textContent = todo;
            console.log(newli.querySelector('span'))
            list.appendChild(newli);
        }
        else{
            list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
            `;
        }
    }
}

form.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = form.add.value.trim();
    genTemplate(todo)
    form.reset();
});

list.addEventListener('click', e => {
    if ( e.target.classList.contains('delete') ){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) =>{
    Array.from(list.children)
        .filter(li =>  !li.textContent.toLowerCase().includes(term) )
        .forEach(  li => li.classList.add('filtered') );
    
    Array.from(list.children)
        .filter(li =>  li.textContent.toLowerCase().includes(term) )
        .forEach(  li => li.classList.remove('filtered') );
};

search.addEventListener('keyup',(e) =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});