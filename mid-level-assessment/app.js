function oneWordOnly(words){
    return words.filter(word => !word.includes(" "))
}

console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]