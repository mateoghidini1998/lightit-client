import React, { useEffect, useState } from 'react';
import '../styles/Pages/Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDiagnosis, getSymptoms } from '../slices/diagnosisSlice';
import IssueContainer from '../components/Diagnosis/IssueContainer'

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

  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    dispatch(getDiagnosis({symptoms: [formData.symptom]}))
  } 

 
  return (
    <div className="dashboard-container">  
      <h1>Consult your <span>Diagnosis</span></h1>
        <form action="" className='symptoms_form' onSubmit={onSubmitHandler}> 
            <label htmlFor="">Select Your Symptoms</label>
            <select name="" id="" value={formData.symptom} onChange={onChangeHandler}>
            {isLoading ? <option>Loading...</option> : 
            symptoms.map((symptom)=>{
                return (
                    <option value={symptom.ID} key={symptom.ID}>{symptom.Name}</option>
                )
            })}
            </select>
            <button type='submit' className='button btn_submit'>Submit</button>
        </form>
        <IssueContainer/>
    </div>
  );
}

export default Dashboard;
