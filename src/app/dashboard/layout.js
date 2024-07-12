import FooterMenu from '@/components/FooterMenu'
import { DashboardState } from '@/context/ContextDashboard'
import React from 'react'

export default function DashboardLayout({ children }) {
    return (
        <DashboardState>
            <div>
                {children}
                <FooterMenu />
            </div>
        </DashboardState>


    )
}
