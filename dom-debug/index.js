const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
    document.getElementById("input").value = ""
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        console.log(dropDown.parentElement)
        dropDown.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    subItem.textContent = document.getElementById("input").value
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    dropDown.parentElement.style.backgroundColor = colors[0]
    subItem.setAttribute("class", "subItem")
    return subItem
}


