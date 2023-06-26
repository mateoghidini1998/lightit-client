import React, { useEffect, useState } from 'react';
import '../styles/Pages/Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { getDiagnosis, getSymptoms } from '../slices/diagnosisSlice';
import IssueContainer from '../components/Diagnosis/IssueContainer'

function Dashboard() {

  const dispatch = useDispatch();

  
  const { symptoms, isLoading } = useSelector((state) => state.diagnosis);

  const [ formData, setFormData ] = useState({
    symptoms: null
  }); 

  //Handle Symptoms Select
  const onChangeHandler = (e) => {
    const selectedSymptoms = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, symptoms: selectedSymptoms });
  };

  //Fetch Symptoms List
  useEffect (() => {
    dispatch(getSymptoms());
  }, [])

  //Handle Submit with an array of Symptoms
  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    dispatch(getDiagnosis({symptoms: formData.symptoms}))
  } 

 
  return (
    <div className="dashboard-container"> 
      <div className="symptoms_form_container">
        <h1>Consult your <span>Diagnosis</span></h1>
          <form action="" className='symptoms_form' onSubmit={onSubmitHandler}> 
              <label htmlFor="">Select Your Symptoms</label>
              <select name="" id="" value={formData.symptoms !== null ? formData.symptoms : ''} onChange={onChangeHandler} multiple>
              {isLoading && symptoms.length === 0 ? <option>Loading...</option> : 
              symptoms.map((symptom)=>{
                  return (
                      <option value={symptom.ID} key={symptom.ID}>{symptom.Name}</option>
                  )
              })}
              </select>
              <button type='submit' className='button btn_submit'>Submit</button>
          </form>
      </div> 
        <IssueContainer/>
    </div>
  );
}

export default Dashboard;
