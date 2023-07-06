import React from 'react'
import SideBar from '../../../components/AdminPanelComp/SideBar'
import UsersListTab from './UsersListTab'

const UsersList = () => {
    return (
        <>
            <SideBar component={<UsersListTab />} selectedKey="3" />
        </>
    )
}

export default UsersList