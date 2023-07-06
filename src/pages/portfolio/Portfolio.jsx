import React from 'react'
import SidebarLayout from '../../components/SidebarLayout'
import PortfolioTab from './PortfolioTab'

const Portfolio = () => {
  return (
    <>
        <SidebarLayout component={<PortfolioTab />} selectedKey="3" />
    </>
  )
}

export default Portfolio