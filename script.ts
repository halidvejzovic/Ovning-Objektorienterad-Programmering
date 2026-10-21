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

