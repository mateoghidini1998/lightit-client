import React, { useEffect, useState } from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getUserDiagnosis } from '../slices/userDiagnose'
import '../styles/Pages/Profile.css'

import ProfileCard from '../components/ProfileDiagnosis/ProfileCard'
import DiagnosisCard from '../components/ProfileDiagnosis/DiagnosisCard'
import Pagination from '../components/UI/Pagination'

//Custom Hooks
import usePagination from '../customHooks/usePagination'

function Profile() {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { userDiagnoses, isLoading } = useSelector(state => state.userDiagnose)

    useEffect(() => {
        dispatch(getUserDiagnosis(user.id))
    }, [])

    const { currentPage, currentItems, totalPages, handlePageChange } = usePagination(userDiagnoses, 3);

  return (
    <div className='profile-container'>
        <ProfileCard user={user} />
        <h1 className='title'>My Diagnoses</h1>
        {isLoading ? <h1 className='title loader'>Loading...</h1> :
            <div className="diagnosis-container">
                {userDiagnoses.length === 0 ? (
                    <h1>No diagnosis saved</h1>
                ) : (
                    currentItems.map((diagnosis) => (
                    <DiagnosisCard key={diagnosis.id} diagnosis={diagnosis} />
                    ))
                )}
            </div>
        }
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
    </div>
  )
}

export default Profile