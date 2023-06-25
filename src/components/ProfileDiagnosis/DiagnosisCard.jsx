import React from 'react'
import { MdDeleteOutline, MdHeight } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteUserDiagnose } from '../../slices/userDiagnose'

function DiagnosisCard({diagnosis}) {
    const dispatch = useDispatch()
    const { issue_name, issue_accuracy, issue_ProfName, specialisations, created_at  } = diagnosis
    const specialisationsList = JSON.parse(specialisations)

    const onDeleteHandler = () => {
        dispatch(deleteUserDiagnose(diagnosis.id))
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
      };

  return (
    <div className={`card_container `}>
        <div className="issue_heading">
            <h2>{issue_name}</h2>
        </div>
        <div className="issue_content">
            <label>Profesional Name: </label>
            <p>{issue_ProfName}</p>
        </div>
        <div className="issue_content">
            <label>Diagnose Date: </label>
            <p>{formatDate(created_at)}</p>
        </div>
        <div className="specialitation_content">
            <label>Specialitations: </label>
            {specialisationsList.map((specialisation, index) => {
                return <p key={index}>{specialisation}</p>
            })}
            
        </div>
        <div className={`accuracy_container `}>
            <div className="specialisations">
                <span className={'accuracy'}>{issue_accuracy}%</span>
            </div>
        </div>
        <button onClick={onDeleteHandler} className='delete_btn'><MdDeleteOutline/></button>
    </div>
  )
}

export default DiagnosisCard