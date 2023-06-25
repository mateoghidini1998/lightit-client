import React from 'react'
import '../../styles/Pages/Profile.css'

function ProfileCard({user}) {
  return (
    <div className="profile_info_card">
        <h1>{user.fullname}</h1>
        <span>{user.gender}</span>
        <p>{user.birth_date}</p>
    </div>
  )
}

export default ProfileCard