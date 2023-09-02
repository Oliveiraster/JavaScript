

// função ue adiciona tarefa
const addbtn = document.querySelector("#add-btn")

addbtn.addEventListener("click", function(e){
    e.preventDefault()
    addTask()
})


function addTask(){
    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value
    if(taskTitle){
        // clone template   
        const template = document.querySelector(".template")
        const newTask = template.cloneNode(true)
        console.log(newTask)
        //adiciona titulo 
        newTask.querySelector(".task-title").textContent = taskTitle
        //remover as classe desnecessarias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
        //adicionar tarefa na lista
        const list = document.querySelector("#task-list")
        list.appendChild(newTask)
        // remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn")
        removeBtn.addEventListener("click", function(){
        removeTask(this)
        function removeTask(task){
        task.parentNode.remove(true)
        }})
        // Conclusão de tarefa
        const checkBtn = newTask.querySelector(".done-btn")
        checkBtn.addEventListener("click", function(){
            //inicialmente feito sem o toggle 
            newTask.classList.toggle('done')
        })
        //limpar texto
        document.querySelector("#task-title").value = ""
       
       
}}
