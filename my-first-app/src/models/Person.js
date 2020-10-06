const colors = require('colors')

export default class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
        this.formation = []
        this.experience = []
    }

    addExperiences(...experiences) {

        for (let experience of experiences) {
            this.experience.push(experience)
        }

    }

    addSchools(...schools) {
        for (let school of schools) {
            this.formation.push(schools)
        }
    }

    printResume() {
        console.log(`Profile de : ${this.name.toString().bold} | région de ${this.city.toString().blue}` )
    }
}