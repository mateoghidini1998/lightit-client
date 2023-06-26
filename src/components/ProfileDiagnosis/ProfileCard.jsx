import React from 'react'
import '../../styles/Pages/Profile.css'

function ProfileCard({user}) {
  return (
    <div className="profile_info_card">
        <h1>Full Name: <span>{user.fullname}</span></h1>
        <p className='label'>Gender: <span>{user.gender}</span></p>
        <p className='label'>Date of Birth: <span>{user.birth_date}</span></p>
    </div>
  )
}

export default ProfileCard