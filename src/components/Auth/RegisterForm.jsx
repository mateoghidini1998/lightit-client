import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { registerUser } from '../../slices/authSlice';
import FormGroup from '../UI/FormGroup';
import '../../styles/UI/FormGroup.css'

function RegisterForm() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        birth_date: "",
        gender: "",
        email: "",
        password: "",
        password2: "",
      });
    
      const { fullname, birth_date, gender, email, password, password2 } = formData;
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const formFields = [
        {
            name: "fullname",
            type: "text",
            placeholder: "Insert Full Name",
            label: "Full Name",
            value: formData.fullname,
            onChange: onChange
        },
        {
          name: "gender",
          type: "checkbox",
          placeholder: "",
          label: "",
          value: formData.gender,
          onChange: onChange,
          options: ["male", "female", "other"] 
        },
        {
          name: "birth_date",
          type: "date",
          placeholder: "",
          label: "Date of Birth",
          value: formData.birth_date,
          onChange: onChange
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            value: formData.email,
            onChange: onChange
        },
        {
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            value: formData.password,
            onChange: onChange
        },
        {
            name: "password2",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            value: formData.password2,
            onChange: onChange
        }
    ]

    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(formData);
      dispatch(registerUser(formData));
    }

  if(isAuthenticated){
    navigate("/");
  }

  return (
    <form action="" className="form_container" onSubmit={(e) => onSubmitHandler(e)}>
      {formFields.map((field) => (
        <FormGroup key={field.name} {...field} />
      ))}
      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm