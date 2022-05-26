// Write your solution in this file!

const employee = {
    name:"Value1",
    streetAddress:"Value2"    
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return{...employee,[key]:value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key]=value;
        return employee;  
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
        return[...employee[key]];
}
