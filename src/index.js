document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('new-task-description')
    console.log(input)
    console.log(input.value)
    newToDo(input.value)
    input.value = ''
  })
})


function newToDo(todo){
  let p = document.createElement('p')
  p.textContent = todo
  document.querySelector('#tasks').appendChild(p)
}
