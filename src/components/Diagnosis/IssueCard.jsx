import React, { useState, useEffect } from 'react'
import '../../styles/Components/IssueCard.css'
import { GiConfirmed } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { createUserDiagnose } from '../../slices/userDiagnose'
import { toggleSaveSuccess } from '../../slices/uiSlice'

function IssueCard({issue}) {

    const dispatch = useDispatch()

    const name = issue[0].Name
    const profesionalName = issue[0].ProfName
    const accuracy = issue[0].Accuracy.toFixed(1)
    const specialisations = issue[1].map((specialisation) => (
        <p key={specialisation.ID}>{specialisation.Name}</p>
      ));

    const [ userDiagnose, setUserDiagnose ] = useState({
        issue_name: name,
        issue_ProfName: profesionalName,
        issue_accuracy: accuracy,
        specialisations: issue[1].map((specialisation) => specialisation.Name) 
    })


    let accuracyVisual = ''
    if(accuracy  < 45){
        accuracyVisual = 'low'
    } else if (accuracy  >= 45  && accuracy < 70){
        accuracyVisual = 'medium'
    } else if (accuracy  > 70){
        accuracyVisual = 'high'
    }

    const onSubmitHandler = () => {
        dispatch(createUserDiagnose(userDiagnose)) 
        dispatch(toggleSaveSuccess())
    }

    
  return (
    <div className={`card_container ${accuracyVisual}`}>
        <div className="issue_heading">
            <h2>{name}</h2>
        </div>
        <div className="issue_content">
            <label>Profesional Name: </label>
            <p>{profesionalName}</p>
        </div>
        <div className="specialitation_content">
            <label>Specialitations: </label>
            {specialisations}
        </div>
        <div className={`accuracy_container ${accuracyVisual}`}>
            <div className="specialisations">
                <span className={'accuracy'}>{accuracy}%</span>
            </div>
        </div>
        <button onClick={onSubmitHandler} className='accept_button' type=''>Confirm <GiConfirmed/></button>
    </div>
  )
}

export default IssueCard