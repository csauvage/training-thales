// ES 6 : Classes

/**
 * CLASSES : POO
 * 
 * - Reusabilité 
 * - Maintenabilité 
 * - Clarté 
 * 
 * - Héritage 
 * - Polymorphisme 
 * - (Encapsulation) 
 * 


 => Animal 
    - marcher()
    - courir()
    - manger()
    - reproduire()
    - dormir()

    => Guepard

        - marcher() => marcher (specifique au guepard) // Polymorphisme
        - courir()
        - manger()
        - reproduire()
        - dormir()
    
    => Coccinelle

        - marcher()
        - courir()
        - manger()
        - reproduire()
        - dormir()

    => Requin

        - marcher()
        - courir()
        - manger()
        - reproduire()
        - dormir()

*/

class Animal {

    constructor() {
        this.name = "";
        this.sound = "Bruit animal"
    }

    marcher() {
        console.log("🚶🏻‍♀️")
    }

    manger() {
        console.log("🍔")
    }

    seReproduire() {
        console.log("♀♂")
    }

    dormir() {
        console.log("😴")
    }

    static genre() {
        return "Animal"
    }



}


class Felin extends Animal {
    constructor() {
        super()
        this.sound = "Grrrrr"
    }

    manger() {
        console.log("🍗")
    }
}

const guepard = new Felin();

guepard.manger();
guepard.marcher();
guepard.dormir();
console.log(Animal.genre())
console.log(Felin.genre())

console.log(guepard.sound)

---
