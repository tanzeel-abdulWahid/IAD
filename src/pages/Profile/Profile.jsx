import React from 'react'
import SidebarLayout from '../../components/SidebarLayout'
import ProfilePageTab from './ProfilePageTab'

const ProfilePage = () => {
    return (
      <SidebarLayout component={<ProfilePageTab />} selectedKey="6"/>
        
    )
}

export default ProfilePage