import { getUserOnboardingStatus } from '@/action/user'
import { industries } from '@/data/industries'
import { redirect } from 'next/navigation'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'

const OnbordingPage = async () => {

    const {isOnboarded} = await getUserOnboardingStatus()

    if(isOnboarded){
        redirect("/dashboard")
    }

    return (
        <main> 
            <OnboardingForm industries={industries} />
        </main>
    )
}

export default OnbordingPage