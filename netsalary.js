let basicSalary = prompt("what is basic salary");
let benefits = prompt("benefits");
let grossSalary = parseInt(basicSalary) + parseInt(benefits);
let netSalary = grossSalary - (PAYE()) -nssf() -nhif();
function PAYE() {
    if (grossSalary <= 288000) {
        return (0.1 * grossSalary);
    }
    else if (grossSalary > 288000 && grossSalary <= 388000) {
        return (0.25 * grossSalary);
    }
    else if (grossSalary > 3888000){
        return (0.3 * grossSalary);
    } 
}
// NSSF
function nhif() {
    (grossSalary <= 5999)} {
        return 150;
    }
      if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300;
    }
    else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 400;
    }
    else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 500;
    }
    else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600;
    }
    else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750;
    }
    else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850;
    }
    else if (grossSalary >= 30000 && grossSalary <= 34999) {
        return 900;
    }
    else if (grossSalary >= 35000 && grossSalary <= 39000) {
        return 950;
    }
    else if (grossSalary >= 40000 && grossSalary <=44900) {
        return 1000;
    }
    else if (grossSalary >= 45000 && grossSalary <=49000) {
        return 1100;
    }
    else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200;
    }
    else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300;
    }
    else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return 1400;
    }
    else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500;
    }
    else if (grossSalary >= 90000 && grossSalary <= 99999) {
        return 1600;
    }
    // NSSF

    function nssf() {
        if (grossSalary <= 50000){
            return 200;
        }
        else if (grossSalary > 51000 && grossSalary <= 150000) {
            return 200;
        }
        else if (grossSalary > 151000 && grossSalary <= 250000) {
            return 360;
        }
    }
    
