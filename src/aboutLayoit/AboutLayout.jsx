import React from 'react'
import { ResourceHero } from '../resources/Resources'
import { Outlet } from 'react-router-dom'

const AboutLayout = () => {
    return (
        <>
            <ResourceHero />
            <Outlet/>
        </>
    )
}

export default AboutLayout