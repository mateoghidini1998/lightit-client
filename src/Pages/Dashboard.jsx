import React, { useEffect, useState } from 'react';
import '../styles/Pages/Dashboard.css';
import { logoutUser } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getDiagnosis, getSymptoms } from '../slices/diagnosisSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const { symptoms, isLoading } = useSelector((state) => state.diagnosis);
  const { user } = useSelector((state) => state.auth); 
  
  const [ formData, setFormData ] = useState({
    symptom: ''
  }); 

  const onChangeHandler = (e) => {
    const selectedSymptom = e.target.value;
    setFormData({ ...formData, symptom: selectedSymptom });
  };

  useEffect (() => {
    dispatch(getSymptoms());
  }, [])

  const logout = () => {
    dispatch(logoutUser());
  };

  const yearOfBirth = user && user.birth_date;
  const gender = user && user.gender;
  console.log(yearOfBirth, gender, formData.symptom)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getDiagnosis({symptoms: [formData.symptom]}))
  } 
 
  return (
    <div className="dashboard-container">  
      <h1>Dashboard</h1>
        <form action="" onSubmit={onSubmitHandler}> 
            <label htmlFor="">Symptoms</label>
            <select name="" id="" value={formData.symptom} onChange={onChangeHandler}>
            {isLoading ? <option>Loading...</option> : 
            symptoms.map((symptom)=>{
                return (
                    <option value={symptom.ID} key={symptom.ID}>{symptom.Name}</option>
                )
            })}
            </select>
            <button type='submit'>Submit</button>
        </form>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
