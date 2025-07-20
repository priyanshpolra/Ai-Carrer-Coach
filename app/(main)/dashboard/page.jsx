import { getUserOnboardingStatus } from '@/action/user'
import { redirect } from 'next/navigation'
import React from 'react'

const IndustryInsightsPage = async () => {

    const {isOnboarded} = await getUserOnboardingStatus()
    
        if(!isOnboarded){
            redirect("/onboarding")
        }

    return (
        <div>
            Industry Insights Page
        </div>
    )
}

export default IndustryInsightsPage
