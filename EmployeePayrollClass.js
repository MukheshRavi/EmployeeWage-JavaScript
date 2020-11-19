// UC 14
// Check Employee Name,salary,id,gender,startdate using regex 
class EmployeePayroll
{
    // Properties
    get id(){return this._id;};
    set id(id)
    {
        let idRegex = RegExp("^[1-9][0-9]{0,}$");
        if(idRegex.test(id))
        this._id = id;
        else
        throw "Incorrect Id";
    }
    get salary(){return this._salary};
    set salary(salary)
    {
        let salaryRegex = RegExp("^[1-9][0-9]{0,}$");
        if(salaryRegex.test(salary))
        this._salary = salary;
        else
        throw "Incorrect salary";
    }
    get gender(){return this._gender;}
    set gender(gender)
    {
        let genderRegex = RegExp("^[MmFf]$");
        if(genderRegex.test(gender))
        this._gender = gender;
        else
        throw "Incorrect gender";
    }
    get startDate(){return this._startDate;}
    set startDate(date)
    {
        if(date <= new Date())
        this._startDate = date;
        else
        throw "Incorrect date";
    }

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