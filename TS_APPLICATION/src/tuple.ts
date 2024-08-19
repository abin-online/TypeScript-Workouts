type PersonDetails = [string, number, string]

function showDetails(person: PersonDetails): string {
    const [name , age, place] = person
    return `${name} is ${age} years old and lives in ${place}`
}

const detailArr: PersonDetails = ['Abin' , 23 , 'Chennai']
console.log(showDetails(detailArr))




type PersonDetailsWithCityOptional = [string , number , string?]

function cityOptional(person:PersonDetailsWithCityOptional ): string {
    const [name, age, city] = person
    if (city) {
        return `${name} is ${age} years old and lives in ${city}`
    } else {
        return `${name} is ${age} years old`
    } 
}

const personArr : PersonDetailsWithCityOptional = ['Abin', 23, 'Chennai']
const personArr1 : PersonDetailsWithCityOptional = ['Abin', 23,]

console.log(cityOptional(personArr));
console.log(cityOptional(personArr1));







