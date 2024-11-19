import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import "./profile.css"

const Profile = () => {

    const headerTitle = "ProfileName"
    return (
        <>
            <Header heads={headerTitle}/>
            <div className='profileCard'>
                <Card/> 
                <Card/> 
                <Card/> 
            </div>
        </>

    )
}

export default Profile