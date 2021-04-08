/**
 * person.js
 */
 "use strict";



 export class Person {

    constructor(name ,dateOfBirth){
          this.name = name;
          this.dateOfBirth = new Date(dateOfBirth);
    }

    set pName(name){
        this.name = name;
    }
    set pdateOfBirth(dateOfBirth){
        this.dateOfBirth = dateOfBirth;
    }

    get pdateOfBirth(){
        return this.dateOfBirth;
    }
    get pName(){
        return this.name;
    }
    toString() {
        return {Name: this.name , "Date of Birth": 
        this.dateOfBirth.getFullYear()+ "-" + 
        this.dateOfBirth.getMonth() + "-" + this.dateOfBirth.getDate()}
    }}