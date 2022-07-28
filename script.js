const todos = document.querySelectorAll('.todo')
const all_boxes = document.querySelectorAll('.box')
let draggableTodo = null


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
console.log(all_boxes)