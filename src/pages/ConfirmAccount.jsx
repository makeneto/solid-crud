import React from 'react'

export default function ConfirmAccount({ profilePic, name, email }) {
    return (
        <div>
            <h1>User Information</h1>
            <img src={profilePic} alt='Profile' />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    )
}
