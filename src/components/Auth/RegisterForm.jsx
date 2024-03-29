import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { registerUser } from '../../slices/authSlice';
import FormGroup from '../UI/FormGroup';
import '../../styles/UI/FormGroup.css'

function RegisterForm() {
    const dispatch = useDispatch();
    const { isAuthenticated, error } = useSelector(state => state.auth)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        birth_date: "",
        gender: "",
        email: "",
        password: "",
        password2: "",
      });
        
    const onChange = (e) => {
      const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
          if (checked) {
            setFormData({ ...formData, [name]: [...gender, value] });
          } else {
            setFormData({
              ...formData,
              [name]: gender.filter((option) => option !== value),
            });
          }
        } else {
          setFormData({ ...formData, [name]: value });
      }
    } 
    
    

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
          type: "radio",
          placeholder: "",
          label: "",
          value: formData.gender,
          onChange: onChange,
          options: ["male", "female"] 
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

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      await dispatch(registerUser(formData));
    };

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/');
      }
    }, [isAuthenticated, navigate]);


  return (
    <form action="" className="form_container" onSubmit={(e) => onSubmitHandler(e)}>
      {formFields.map((field) => (
        <FormGroup key={field.name} {...field} />
      ))}
      <button type="submit">Register</button>
      {error && <p style={{ color: 'red', marginTop: '10px' }} className="error">{error.message}</p>}
    </form>
  )
}

export default RegisterForm