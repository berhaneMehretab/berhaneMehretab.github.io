import { Person} from "./modle/persons.js";


export class Employee extends Person{

    constructor(name ,salary , hireDate){
        super(name);
        this.salary = salary ;
        this.hireDaate = new Date(hireDate);
 
    }
     dojob( job ){
        return this.name  + " is a " + job + " who earns " + (this.salary).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          }); /* $2,500.00 */   
     }

}