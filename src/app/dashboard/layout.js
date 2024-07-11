import FooterMenu from '@/components/FooterMenu'
import React from 'react'

export default function DashboardLayout({ children }) {
    return (

        <div>
            {children}
            <FooterMenu />
        </div>


    )
}
