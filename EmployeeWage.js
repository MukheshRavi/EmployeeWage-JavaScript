//UC 1
//Checks if employee is present or absent
const IS_ABSENT=0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is absent");
    return;
}
else
{
    console.log("Employee is present");
}
// UC 2
//Calculates wage for employee
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
switch (empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Employee wage: "+empWage);
//UC 3
//Get working hours using function
function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}
empHrs=GetWorkingHours(empCheck);
console.log("Employee Wage: "+empHrs);
//UC 4
//Calculates wage for a total month
const NO_OF_WORKING_DAYS=20;
for(let day=0; day<NO_OF_WORKING_DAYS; day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=GetWorkingHours(empCheck);
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs: "+empHrs+" Employee Wage: "+empWage);
// UC 5
// Caqlculates employee wage for a maximmum of 100 hours
const MAX_HRS_IN_MONTH=100;
let totalEmpHrs=0;
let totalWorkingDays=0;
let dailyWages = [];
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    dailyEmpHours = GetWorkingHours(empCheck);
    totalEmpHrs += dailyEmpHours;
    dailyWages.push(dailyEmpHours*WAGE_PER_HOUR);
}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("Total No of Days: "+totalWorkingDays+" Total Hrs Worked: "+totalEmpHrs+ "Total Employee Wage: "+empWage);
// UC6 
//Store Daily Wage
dailyWages.forEach(p=> console.log("DailyWage on day is "+ p));
//UC7
// Perform Array operations on daily wage array
// a.Calculate total wage using foreach or reduce
function CalculateTotalWage(dailywage, totalWage)
{
    return totalWage += dailywage;
}
let totalWage = 0;
dailyWages.forEach(p => totalWage += p);
console.log("UC7 Total Wage USing Foreach is "+totalWage);
totalWage = 0;
totalWage = dailyWages.reduce(CalculateTotalWage);
console.log("UC7 Total Wage USing Reduce is "+totalWage);

// b.Show Day along with Dailywage using map function
let cnt=0;
function CreatedailyWageMap(dailywage)
{
    cnt++
    return "Daily Wage Of day "+cnt+" is "+dailywage;
}
let dailyWageMap = dailyWages.map(CreatedailyWageMap);
dailyWageMap.forEach(p=> console.log("UC 7B "+p));

// UC 7C Show Days of Full time daily wage 160 is earned
console.log("UC 7C");
let fullDayWage = dailyWageMap.filter(p=> p.includes("160"));
fullDayWage.forEach(p => console.log("UC 7C "+p));

// UC 7D Find first occurence of fulltime wage
console.log("UC 7D "+dailyWageMap.find(p => p.includes("160")));

// UC 7E Check if Every element of full time wage is correct
console.log("UC 7E Does all elements of FullDaywage have correct elements : "+fullDayWage.every(p => p.includes(160)));

// UC 7F Check if there is any part time wage
console.log("UC 7F Is there any part time wage : "+ dailyWageMap.some(p => p.includes("60")));

// UC 7G Find the no of days employee worked
function NoOfDaysWorked(total, dailyWage)
{
    if(dailyWage > 0)
        return total+1;
    return total;
}
let totalDaysWorked = dailyWages.reduce(NoOfDaysWorked,0);
console.log("UC 7G Total no of days worked : "+totalDaysWorked);

