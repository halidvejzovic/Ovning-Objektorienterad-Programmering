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
*/
class person {
    namn;
    adress;
    telefonnummer;
    constructor(namn, adress, telefonnummer) {
        this.namn = namn;
        this.adress = adress;
        this.telefonnummer = telefonnummer;
    }
    skrivUt() {
        console.log(this.namn);
        console.log(this.adress);
        console.log(this.telefonnummer);
    }
}
const person1 = new person(123, "Kalvshällavägen 42", 704564464);
person1.skrivUt();
export {};
//# sourceMappingURL=script.js.map