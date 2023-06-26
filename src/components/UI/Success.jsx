import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../styles/UI/Success.css'
import {AiFillCloseCircle} from 'react-icons/ai';
import { toggleSaveSuccess } from '../../slices/uiSlice';
 
function Success() {
  const saveSuccess = useSelector(state => state.ui.saveSuccess);
  const dispatch = useDispatch();
  
  const handleCloseAlert = () => { dispatch(toggleSaveSuccess())}

  return (
    <div className={`success_container ${saveSuccess ? 'show' : ''}`}>
      <h2 className='success_message'>Diagnose saved successfully!</h2>
      <button onClick={handleCloseAlert} className='close_btn'><AiFillCloseCircle/></button>
    </div>
  );
}

export default Success;
