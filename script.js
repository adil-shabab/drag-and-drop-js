const todos = document.querySelectorAll('.todo')
const all_boxes = document.querySelectorAll('.box')
let draggableTodo = null
var close_btn = document.querySelectorAll('.trash')



todos.forEach((todo)=>{
    todo.addEventListener("dragstart", dragStart)
    todo.addEventListener('dragend', dragEnd)
})

function dragStart(){
    draggableTodo = this
    console.log('drag start')
}
function dragEnd(){
    draggableTodo = null
    console.log('drag end')
}


all_boxes.forEach((box)=>{
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", dragDrop)
})

function dragOver(e){
    e.preventDefault()
    console.log('drag over')
}
function dragEnter(){
    console.log('drag enter')
}
function dragLeave(){
    console.log('drag leace')
}
function dragDrop(){
    this.appendChild(draggableTodo)
    console.log('drag drop')
}
// console.log(all_boxes)



let btn = document.querySelector('.submit')
// console.log(btn)

btn.addEventListener('click', addItem)
 

function addItem(e){
    e.preventDefault()
    let inputValue = document.querySelector('.input').value
    if(inputValue != ''){
        document.querySelector('.input').value = '';
        todo_div = document.querySelector('.todo-box')
        console.log(todo_div)
        div = document.createElement('div')
        div.className = 'todo'
        div.setAttribute("draggable", "true")
        
        para = document.createElement('p')
        para.innerHTML = inputValue
        // console.log(para)
        
        div.appendChild(para)

        Itag = document.createElement('i')
        Itag.className = 'trash fa-solid fa-trash'
        Itag.addEventListener("click", ()=>{
            console.log('clicked')
            Itag.parentElement.style.display = 'none'
            console.log(Itag.parentElement)
        })

        div.appendChild(Itag)

        todo_div.appendChild(div)

        div.addEventListener("dragstart", dragStart)
        div.addEventListener('dragend', dragEnd)

        document.querySelector('.input').focus()

        console.log(div)
        // console.log(close_btn)
        console.log(document.querySelectorAll('.trash'))

        close_btn = document.querySelectorAll('.trash')

    }
}

// let close_btn = document.querySelectorAll('.trash')
close_btn.forEach((close)=>{
    console.log(close_btn)
    close.addEventListener("click", ()=>{
        console.log('clicked')
        close.parentElement.style.display = 'none'
        console.log(close.parentElement)
    })
    
})
console.log(close)
console.log(close_btn)


{/* <div class="todo d-flex justify-content-between align-items-center" draggable="true">
<p>Work from Home</p>
<i class="fa-solid fa-trash"></i>
</div> */}

