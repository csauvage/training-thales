class Human {
    firstname: string
    lastname?: string
    fullname: string
    age: number | undefined

    constructor(firstname: string, age: number, lastname?: string) {
        
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = `${this.firstname} ${this.lastname}`.trim()
        this.age = age;

    }



}

// Visibilité de ses membres 

// PUBLIC => Tout le monde a acces a la variable
// Private => Element accessible a la classe / instance   
// Protected => Element accessible a la classe / enfants

class Worker extends Human {

    private job: string

    static position: string = "WORKER"
    

    constructor(firstname: string, lastname: string, age: number , job: string) {
        super(firstname, age, lastname);
        this.job = job
    }

    public work() : void {
        /* Do some work */

    }

    private joinUnion() : void {
        /* Do some work */

    }
    

    /* Accesseur / Mutateurs */

    public getJob(): string {
        return this.job
    }

    public setJob(job: string): void {
        
    }

}

export {Human, Worker}


abstract class Animal {

    abstract crier(): void

    marcher(): void {

    }
} 

class Felin extends Animal {

    crier(): void {
        console.log("Roar")
    }

} 


const lion = new Felin()
lion.crier()