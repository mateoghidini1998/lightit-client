import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/UI/Success.css'
 
function Success() {
  const saveSuccess = useSelector(state => state.ui.saveSuccess);
  

  return (
    <div className={`success_container ${saveSuccess ? 'show' : ''}`}>
      <h2 className='success_message'>Diagnose saved successfully!</h2>
    </div>
  );
}

export default Success;
