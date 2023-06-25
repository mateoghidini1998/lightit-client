import React from 'react'
import '../../styles/Components/IssueCard.css'

function IssueCard({issue}) {

    const name = issue[0].Name
    const profesionalName = issue[0].ProfName
    const accuracy = issue[0].Accuracy
    const specialisations = issue[1].map((specialisation) => (
        <p key={specialisation.ID}>{specialisation.Name}</p>
      ));

    let accuracyVisual = ''
    if(accuracy  < 45){
        accuracyVisual = 'low'
    } else if (accuracy  > 45  && accuracy < 70){
        accuracyVisual = 'medium'
    } else if (accuracy  > 70){
        accuracyVisual = 'high'
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
    </div>
  )
}

export default IssueCard