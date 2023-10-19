const validation = (data) => {
    let errors = {
        email: "",
        password: ""
    };
    if (!data.email){
        errors.email = "Email is required";
    }else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
     errors.email = "Email is invalid";
    }

    if (data.email.length >= 35) {
        errors.email = "Invalid email";
    }
    
    
    if (!/\d/.test(data.password)) {
        errors.password = "Password must contain a number";
    }
    
    if (!data.password) {
        errors.password = "Password is required";
    } else if (data.password.length < 6 || data.password.length > 10) {
        errors.password = "Password must be 6 to 10 characters";
    }
    
      return errors;
    }
  
export default validation;
