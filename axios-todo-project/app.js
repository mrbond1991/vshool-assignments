const form = document.list
const container = document.getElementById("todoList")

function get(){
    axios.get("https://api.vschool.io/mikebond/todo")
        .then(response => info(response.data))
        .catch(err => console.log("Error"))
}

function info(data) {

    clearList()

    for(let i = 0; i < data.length; i++) {
        const todoDiv = document.createElement("div")
        todoDiv.setAttribute("id", "todoDiv")

        const titleH4 = document.createElement("h4")
        titleH4.textContent = data[i].title
        todoDiv.appendChild(titleH4)

        const descripH4 = document.createElement("h4")
        descripH4.textContent = data[i].description
        todoDiv.appendChild(descripH4)

        const priceH4 = document.createElement("h4")
        priceH4.textContent = data[i].price
        todoDiv.appendChild(priceH4)

        const picture = document.createElement("img")
        picture.src = data[i].imgUrl
        todoDiv.appendChild(picture)

        const completeCheck = document.createElement("input")
        completeCheck.setAttribute("type", "checkbox")
        todoDiv.appendChild(completeCheck)

        
        completeCheck.addEventListener("change", (e) =>{
            axios.put("https://api.vschool.io/mikebond/todo/" + data[i]._id,{
                completed: completeCheck.checked
            })
            .then(result => {
                if(completeCheck.checked) {
                    todoDiv.style.textDecoration = "line-through"
                    completed = true
                } else {
                    todoDiv.style.textDecoration = "none"
                    completed = false
                }
            })
            .catch(error => console.log(error))
        })
        
        const editBttn = document.createElement("button")
        editBttn.textContent = "Edit"
        editBttn.style.backgroundColor = "green"
        todoDiv.appendChild(editBttn)
        
        const delBttn = document.createElement("button")
        delBttn.textContent = "Delete"
        delBttn.style.backgroundColor = "red"
        delBttn.addEventListener("click", (e) => {
            axios.delete("https://api.vschool.io/mikebond/todo/" + data[i]._id)
            .then(response => get())
            .catch(error => console.log(error))
        })
        todoDiv.appendChild(delBttn)
        
        container.appendChild(todoDiv)


        document.body.appendChild(container)
    }
}

function clearList() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

get()

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const newTodo = {
        title: form.name.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
    }

    form.name.value = ""
    form.description.value = ""
    form.price.value = ""
    form.imgUrl.value = ""

    axios.post("https://api.vschool.io/mikebond/todo", newTodo)
        .then(response => 
            get()
        )
        .catch(error => console.log(error))
})
