/**
 * main.js
 */
 "use strict";

 import {Person} from "./modle/persons.js";
 
 const persons = [new Person("Ana Smith" , "1998-12-15"),
                  new Person("Bob Jone" , "1945-11-16"),
                  new Person("Carlos Silm Helu" , "1976-09-24")
                 ]; 

for(let per of persons){
    console.log(per.toString());

}