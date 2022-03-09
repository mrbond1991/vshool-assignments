const form = document.infoForm

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let firstName = form.fName.value
    let lastName =  form.lName.value
    let custAge = form.age.value
    let custGender = form.gender.value
    let destination = form.location.value
    let dietArr = []
    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked){
            dietArr.push(form.diet[i].value)
        }
    }
    alert (
        `First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${custAge} \nGender: ${custGender} \nDestination: ${destination} \nDietary Restrictions: ${dietArr}`
    )
})