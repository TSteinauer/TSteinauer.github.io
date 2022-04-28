window.onload = function () {
    document.getElementById("addSal").onclick = addSalary;
    document.getElementById("dispRes").onclick = displayResults;
    document.getElementById("dispSal").onclick = displaySalary;
    document.getElementById("selectEmployee").focus();
};


const person = new Array();
const salaries = new Array();
let $ = function(id)
{
    return document.getElementById(id);
}





function displayResults()
{
    
    var sum = 0;
    var average = 0;
    for(var i = 0; i < salaries.length ; i++ )
    {
        sum += salaries[i];
        
    }
    average = (sum/salaries.length);

    var max = 0;
    for(var i = 0; i < salaries.length ; i++ )
    {
        if (salaries[i] > max)
        {
          max = salaries[i];
        }
    }
   


    $("results").innerHTML = ("The average salary is: " + average + "$. " + "The Highest salary is: " + max + "$.")
    

}

function displaySalary()
{
    var table = "<table><thead><tr><th>Employee name:</th><th>Salary:</th></tr></thead>";
    for(var i = 0; i < person.length; i++)
    {
        table += "<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>";
    }
    table += "</table>";
    $("results_table").innerHTML = table;

}

function addSalary()
{
    if($("selectEmployee").value == null || $("employeeSalary").value == null)
    {
        alert("Please enter required values");
        return;
    }
    else if (isNaN($("employeeSalary").value) || $("employeeSalary") <= 0)
    {
        alert("Please use valid input in the Employee Salary field");
        return;
    }
    let empName = $("selectEmployee").value;
    let empSalary =parseFloat( $("employeeSalary").value);

    person.push(empName);
    salaries.push(empSalary);

    $("pushedValues").innerHTML = ("name " + person[0] + " salary " + salaries[0] + " array Size: " + person.length + " salary array size: " + salaries.length);

}



