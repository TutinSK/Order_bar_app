export default function validation(loginForm) {
    let errors = {};
  
    if (!loginForm.userName) {
      errors.userName = 'Username required';
    }
    else if (!/^[A-Za-z]+/.test(loginForm.name.trim())) {
      errors.userName = 'Enter a valid name';
    }
  
    if (loginForm.userName !== 'user' && loginForm.userName !== 'admin') {
      errors.userName = 'UserName is wrong';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }
    if (!loginForm.password) {
      errors.password = 'Password is required';
     } else if (loginForm.password.length < 6) {
       errors.password = 'Password needs to be 6 characters or more';
     }
  
    // if (!loginForm.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (loginForm.password2 !== loginForm.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }