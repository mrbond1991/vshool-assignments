const formAdd = document.addForm
const formSub = document.subForm
const formMult = document.multForm

formAdd.addEventListener("submit", function(event) {
    event.preventDefault()
    
    let addNum1 = formAdd.add1Num.value;
    let addNum2 = formAdd.add2Num.value;
    formAdd.add1Num.value = "";
    formAdd.add2Num.value = "";
    let addAnswer = parseInt(addNum1) + parseInt(addNum2);
    let h1Sum = document.createElement("h1");
    h1Sum.textContent ="The sum is: " + addAnswer;
    formAdd.appendChild(h1Sum)
})

formSub.addEventListener("submit", (event) => {
    event.preventDefault();

    let subNum1 = formSub.sub1Num.value;
    let subNum2 = formSub.sub2Num.value;
    formSub.sub1Num.value = "";
    formSub.sub2Num.value = "";
    let subAnswer = parseInt(subNum1) - parseInt(subNum2);
    let h1Sub = document.createElement("h1");
    h1Sub.textContent = "The difference is: " + subAnswer;
    formSub.appendChild(h1Sub)
})

formMult.addEventListener("submit", (event) => {
    event.preventDefault();

    let numMult1 = formMult.mult1Num.value;
    let numMult2 = formMult.mult2Num.value;
    formMult.mult1Num.value = "";
    formMult.mult2Num.value = "";
    let multAnswer = parseInt(numMult1) * parseInt(numMult2);
    let h1Mult = document.createElement("h1");
    h1Mult.textContent = "The product is: " + multAnswer;
    formMult.appendChild(h1Mult)
})