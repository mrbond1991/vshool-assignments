const form = document.addItem

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    listItem = createListItem()
    // document.getElementById("list").appendChild(listItem)
})

function createListItem() {
    const listItem = document.createElement("li");
    listItem.id = "listItem"
    const listItemName = document.createElement("div")
    const listItemEdit = document.createElement("button")
    const listItemX = document.createElement("button")
    listItemName.textContent = form.title.value;
    listItemName.id = "itemName"
    listItemEdit.textContent = "Edit"
    listItemEdit.id = "edit"
    listItemEdit.addEventListener("click", () => {
        const saveButton = document.createElement("button")
        listItem.prepend(saveButton)
        saveButton.id = "saveButton"
        saveButton.textContent = "Save"
        
        const liInput = document.createElement("input")
        liInput.value = listItemName.textContent
        listItem.prepend(liInput)
        document.getElementById("listItem").removeChild(listItemName)

        document.getElementById("listItem").removeChild(listItemEdit)

        saveButton.addEventListener("click", () => {
            listItem.prepend(listItemEdit)
            listItemName.textContent = liInput.value
            listItem.prepend(listItemName)

            document.getElementById("listItem").removeChild(liInput)
            
            document.getElementById("listItem").removeChild(saveButton)
            
        })
    })

    

    listItemX.textContent = "X"
    listItemX.style.marginLeft = "5px"
    listItemX.id = "xButton"
    listItemX.addEventListener("click", () => {
        document.getElementById("list").removeChild(listItem)
    })
    list.appendChild(listItem);
    listItem.appendChild(listItemName)
    listItem.appendChild(listItemEdit)
    listItem.appendChild(listItemX)
    form.title.value = "";
}

