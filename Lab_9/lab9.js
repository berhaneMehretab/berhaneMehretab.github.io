//question-1
const Person = {
    name: "",
    dateOfBirth: "",
    getName: function(){
        return this.name;
    },
    setName: function(newName){
        this.name = newName;
    }
}

const john = Object.create(Person);
john.setName("John");john.dateOfBirth = new Date(1998 , 11 , 10); 
d = john.dateOfBirth;

let dd = d.getDate();
let mm = d.getMonth()+1;
let yy = d.getFullYear();

let da = yy + '-' + mm + '-' + dd ;

console.log("The person's name is " +john.getName()+'\n');
console.log("John was born on " + da );

/////////////////////////////////////
//questin-2


function PersonE(name , salary , job , ){ 
    this.name = name;
    this.salary = 0;
    this.job = job ;
    const date = new Date();
     this.setSalary = function(salary){
         this.salary = salary ;
     },
    this.date = date.getFullYear;
    const numberFormatter = new Intl.NumberFormat('en-US' , {
        style: 'currency',
        currency: 'USD', 
    });
  
    this.dojob = function( job){
      console.log(this.name + " is a" + this.job + " who earns " + numberFormatter.format(this.salary));
    } 
  }
  
  
  emp = new PersonE("Anna" , 3435 ," programmer");
  emp.setSalary(249995.50);
  
  console.log(emp.dojob());

  //qustion-3
function Personf(name , dateOfBirth ){
    this.name = name ;
    this.dateOfBirth = dateOfBirth;
    dda = new Date(this.dateOfBirth);
    let dd = dda.getDate();
    let mm = dda.getMonth();
    let yy = dda.getFullYear();
    
    let birth = yy+ '-' + 'mm' + dd;
    dateOfBirth =birth;
    }
    
    Personf.prototype.toString = function personToString(){
        return {Name: this.name , DateOfBirth: this.dateOfbirth};
    }
    
    
    peter = new Personf("Peter" , new Date( "  November 10 , 1985") );
    
    console.log(peter.toString());