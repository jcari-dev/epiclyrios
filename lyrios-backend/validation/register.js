const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.passord2 : "";

    if (Validator.isEmpty(data.firstName)){
      error.firstName = "Field Required"
    }   


    if (Validator.isEmpty(data.lastName)){
       error.lastName = "Field Required"
    }   

//email check
    if (Validator.isEmpty(data.email)){
      error.email = "Field Required";
    }       
    else if (!Validator.isEmail(data.email)){
      errors.email = "Email is invalid";
    }

//password check
    if (Validator.isEmpty(data.password)){
       errors.password = "field is required";
    }
    if (Validator.isEmpty(data.password2)){
      errors.password2 = "Confirm password field is required";
    }
//force user to make a strong password
    if (!Validator.isLength(data.password,{min:6, max:20})){
      errors.password = "Password must be at least 6 characters";
    }
// password 1 and 2 must match to validate
    if (!Validator.equals(data.password, data.password2)){
       errors.password2 = "Password must match";
    }

    return {
        errors,
        isValid : isEmpty(errors)
    };
};