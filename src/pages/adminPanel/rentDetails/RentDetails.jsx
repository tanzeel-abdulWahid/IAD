import React from 'react'
import SideBar from '../../../components/AdminPanelComp/SideBar'
import RentDetailsTab from './RentDetailsTab'

const RentDetails = () => {
    return (
        <>
            <SideBar component={<RentDetailsTab />} selectedKey="4" />

        </>
    )
}

export default RentDetails