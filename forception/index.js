function forception(people, alphabet) {
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var newArr = []

    for(var i = 0; i < people.length; i++) {
        // newArr.push(people[i] + ":")
        for(var i = 0; i < alphabet.length; i++) {
            newArr.push(people[i] + ":", ...alphabet.toUpperCase())
            break
        }
        break
    }
    return newArr
}

console.log(forception())