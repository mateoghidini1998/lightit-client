import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDiagnosis } from '../slices/userDiagnose'
import '../styles/Pages/Profile.css'

function Profile() {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { userDiagnoses, isLoading } = useSelector(state => state.userDiagnose)

    useEffect(() => {
        dispatch(getUserDiagnosis(user.id))
    }, [])

    

    console.log(user)
    console.log(userDiagnoses)

  return (
    <div className='profile-container'>Profile</div>
  )
}

export default Profile