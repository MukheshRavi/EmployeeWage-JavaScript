//UC11
// Create employee payroll data object
class EmployeePayroll
{
    // Properties
    id;
    salary;

    constructor(id,name,salary)
    {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name(){return this._name;}
    set name(name)
    {console.log("setting name through setter"); 
    this._name = name;}

    toString()
    {
        return "Id : "+this.id+" Name : "+this.name+" Salary : "+this.salary;
    }
} 

// Create instances of class
let employee = new EmployeePayroll(1,"Mukhesh",50000);
console.log("id : "+employee.id+" name : "+employee.name);
console.log(employee.toString());
