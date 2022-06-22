import React, { useState } from "react";
import { SignUpForm, InputWrap } from "./FormStyles";

export default function SignUp({ setSuccess }) {
  const input = { value: "", valid: false };
  const [email, setEmail] = useState(input);
  const [fName, setFName] = useState(input);
  const [lName, setLName] = useState(input);
  const [password, setPassword] = useState(input);
  const [validForm, setValidForm] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      if (!e.target[i].checkValidity() || !e.target[i].value.length) {
        setValidForm(false);
        return;
      } else {
        setValidForm(true);
      };
    }
    if(validForm){
      console.log("Success");
      setSuccess("true");
      const timer = setTimeout(() => {
        setSuccess("false");
      }, 1880);
      return () => clearTimeout(timer);
    }
  };

  const isValid = (target) => {
    if (target.value.length && target.checkValidity()) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SignUpForm onSubmit={onSubmit} validForm={`${validForm}`}>
      <InputWrap valid={`${validForm ? validForm : fName.valid }`} errormsg='First Name cannot be empty'>
        <input
          type='text'
          name='fName'
          placeholder='First Name'
          value={fName.value}
          onChange={(e) =>
            setFName({ value: e.target.value, valid: isValid(e.target) })
          }
        />
      </InputWrap>
      <InputWrap valid={`${validForm ? validForm : lName.valid}`} errormsg='Last Name cannot be empty'>
        <input
          type='text'
          name='lName'
          placeholder='Last Name'
          value={lName.value}
          onChange={(e) =>
            setLName({ value: e.target.value, valid: isValid(e.target) })
          }
        />
      </InputWrap>
      <InputWrap valid={`${validForm ? validForm : email.valid}`} errormsg='Looks like this is not an email'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email.value}
          onChange={(e) =>
            setEmail({ value: e.target.value, valid: isValid(e.target) })
          }
        />
      </InputWrap>
      <InputWrap valid={`${validForm ? validForm : password.valid}`} errormsg='Password cannot be empty'>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password.value}
          onChange={(e) =>
            setPassword({
              value: e.target.value,
              valid: isValid(e.target),
            })
          }
        />
      </InputWrap>
      <input
        type='submit'
        name='submitBtn'
        formNoValidate='formnovalidate'
        value='CLAIM YOUR FREE TRIAL'
      />
      <p>
        By clicking the button, you are agreeing to our{" "}
        <b>Terms and Services</b>
      </p>
    </SignUpForm>
  );
}

// setFName({value: e.target.value, valid: e.target.checkValidity()})
