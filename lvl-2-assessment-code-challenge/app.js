const animals = [ 
	{ 
		  name: "Spot", 
			species: "Dog",
			weightInPounds: 200
  },
	{ 
		  name: "Flute", 
			species: "Cat",
			weightInPounds: 25
  },
	{ 
		  name: "Trix", 
			species: "Dog",
			weightInPounds: 15
  },
	{ 
		  name: "Tabby", 
			species: "Cat",
			weightInPounds: 9
  }
]

const species = animals.filter(function(animal) {
    return animal.species === "Cat"
})

console.log(species)