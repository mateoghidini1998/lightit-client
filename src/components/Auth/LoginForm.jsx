import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import FormGroup from '../UI/FormGroup';
import '../../styles/UI/FormGroup.css'
import { loginUser } from '../../slices/authSlice';

function LoginForm() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const [formErrors, setFormErrors] = useState({});
      const { email, password } = formData;
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const formFields = [
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
        }
    ]

    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(formData);
      dispatch(loginUser({email, password}));
    }

    if(isAuthenticated) {
      navigate('/');
    }

  return (
    <form action="" className="form_container" onSubmit={(e) => onSubmitHandler(e)}>
      {formFields.map((field) => (
        <FormGroup key={field.name} {...field} />
      ))}
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm