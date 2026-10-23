/*
Därefter kan TypeScript-kompilatorn npx tsc användas.

class som en mall 

construktor 

TypeScript
↓
kompilering  npx tsc
↓
JavaScript
↓
webbläsare


Arv
Innebär att en klass kan bygga vidare på en annan klass. Det gör att man kan återanvända kod och skapa mer specialiserade 
varianter av något som redan finns. Om man till exempel har en generell klass för användare kan man låta en administratör vara en 
särskild typ av användare som har extra funktioner.

Exempel i TypeScript

class User {
  constructor(public name: string, public email: string) {}
  present(): string {
    return `${this.name} (${this.email})`;
  }
}
class Admin extends User {
  deleteUser(userName: string): string {
    return `${this.name} tog bort användaren ${userName}.`;
  }
}
const admin = new Admin("Sara", "sara@example.com");
console.log(admin.present());
console.log(admin.deleteUser("Ali"));
Här är Admin en klass som ärver från User med hjälp av extends. Det betyder att Admin får tillgång till egenskaper och 
metoder från User, men kan också lägga till egen funktionalitet. Arv kan vara kraftfullt, men det bör användas med eftertanke. 
I verkliga projekt händer det ofta att man i stället föredrar att kombinera objekt med hjälp av komposition, alltså att bygga upp 
funktionalitet av mindre delar i stället för att skapa långa arvskedjor. Det är ändå viktigt att förstå arv, 
eftersom det är ett klassiskt OOP-begrepp och förekommer i många kodbaser.


*/

class person {
    namn : string;
    adress : string;
    telefonnummer: number;

    constructor (
        namn : string,
        adress : string,
        telefonnummer : number
    ) {
        this.namn = namn;
        this.adress = adress;
        this.telefonnummer = telefonnummer;
    }

    skrivUt(): void{
        console.log(this.namn);
        console.log(this.adress);
        console.log(this.telefonnummer);
    }
}

class student extends person {
    klass : string;
    program : string;

    constructor (
        namn : string,
        adress : string,
        telefonnummer : number,
        klass : string,
        program : string,
    ) {
        super (namn, adress, telefonnummer)
        this.klass = klass;
        this.program = program;
    }

    skrivUt(): void {
        super.skrivUt();

        console.log(this.klass);
        console.log(this.program);
    }
}


const person1 = new person(
    "Halid",
    "Kalvshällavägen 42",
    704564464
);

person1.skrivUt();

const student1 = new student(
    "Halid",
    "Kalvshällavägen 42",
    704564464,
    "Klass1a",
    "Webapp.net"
)

student1.skrivUt()
