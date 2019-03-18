// A simple way to show Polymorphism, Inheritance and Encapsulation

class Job {
    constructor(company, description, qualification) {
        this.company = company,
        this.description = description,
        this.qualification = qualification
    }
  
 apply() {
        console.log (`Apply to ${this.company} if have ${this.qualification}`)
    }
}

class Pwc extends Job {
    constructor(company, description, qualification) {
        super(company, description, qualification)
        this.company = 'pwc',
        this.ageLimit = 20,
        this.description = 'Good job',
        this.qualification = '1st class'
    }
}

class Andela extends Job {
    constructor(programming, company, description, qualification){
        super(company, description, qualification)
        this.description = 'Good job',
        this.qualification = 'Javascript',
        this.skill = 'programming',
        this.company = 'Andela'
    }
  
  apply(){
        console.log (`Apply to ${this.company} if you have ${this.skill} skills`)
    }
}

const openingPwc = new Pwc;
const openingAndela = new Andela;

console.log(openingPwc)
console.log(openingAndela.apply());