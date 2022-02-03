var billingAddress = {
    street: "elm",
    houseHum: 428,
    hasPorchLight: true,
    neighbors: ['bill', 'mary', 'luis']
}
console.log(billingAddress)

//DATATYPES
//Make an object of your own. 
//Demonstrate your knowledge of Dot and Bracket Notations
var myPerson = {
    fName: "Alyssa",
    lName: "Bond",
    Age: 26,
    isAnimeNerd: true,
    favAnime: ["Oran Highschool Host Club", "Fruits Basket", "Card Captor Sarkura", "Fushigi Yugi"]
}

console.log(myPerson.fName)
//Displays Alyssa in Console
console.log(myPerson.favAnime[0])
//Displays Oran Highschool Host Club in Console

//Create a conditional statement of your own
if (myPerson.isAnimeNerd === true) {
    console.log ("Winning")
} else {
    console.log ("Keep on searching Loverboy...")
};


//Create a ForLoop of your own. If interacting with an array be sure to also include one iterating(proceeding) through 
for (i = 0; i < myPerson.favAnime.length; i++) {
    console.log(i)
};


//Write a simple function 
function nameOfMyLove(name) {
    console.log("Name of Your True Love Is: " + name)
}

nameOfMyLove("Alyssa")

//DOM
//get an element by its id using the document keyword in JS
//with the element you get by its id you will then add an event listener to the element
document.getElementById("submit-button").addEventListener("click", function (){
    if (document.getElementById("submit-button").innerText === "Subscribe Here!") {
        document.getElementById("submit-button").innerText = "Thank You!"
    } else {
        document.getElementById("submit-button").innerText = "Subscribe Here!"
    }
});