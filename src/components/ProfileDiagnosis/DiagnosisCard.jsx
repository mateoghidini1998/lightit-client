import React from 'react'

function DiagnosisCard({diagnosis}) {

    const { issue_name, issue_accuracy, professional_name, specialisations  } = diagnosis
    const specialisationsList = JSON.parse(specialisations)

  return (
    <div className={`card_container `}>
        <div className="issue_heading">
            <h2>{issue_name}</h2>
        </div>
        <div className="issue_content">
            <label>Profesional Name: </label>
            <p>{professional_name}</p>
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
    </div>
  )
}

export default DiagnosisCard