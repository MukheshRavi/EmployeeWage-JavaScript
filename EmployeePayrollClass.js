// UC 13
// Check Employee Name using regex 
class EmployeePayroll
{
    // Properties
    id;
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){return this._name;}
    set name(name)
    {
        let nameRegex = RegExp("^[A-Z][A-Za-z]{2,}");
        if(nameRegex.test(name))
        {
            this._name = name;
        } 
        else
        throw "Incorrect Name";
    }

    toString()
    {
       // const options = {year:'numeric', month:'numeric',day:'numeric'}
        const empDate = this.startDate === undefined?"undefined":this.startDate.toLocaleDateString();
        return "Id : "+this.id+" Name : "+this.name+" Salary : "+this.salary+" Gender : "+this.gender+" StartDate : "+empDate;
    }
} 

// Create instances of class
try{
let employee = new EmployeePayroll(1,"Mukhesh",50000,'M',new Date());
console.log("id : "+employee.id+" name : "+employee.name);
console.log(employee.toString());
employee.name="Ram";
console.log(employee.toString());
}
catch(e)
{
    console.error(e);
}