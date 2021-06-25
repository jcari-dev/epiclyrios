const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data){
    let errors = {};
//make empty fields in order for validator to work
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //email check
    if (Validator.isEmpty(data.email)){
        errors.email = "Field is required";
    }
    else if (!Validator.isEmail(data.email)){
        errors.email="Email is invalid";
    }

   //password check
   if (Validator.isEmpty(data.password)){
       errors.password = "Password Field is required";
   }

   return {
       errors,
       isValid: isEmpty(errors)
   };
};