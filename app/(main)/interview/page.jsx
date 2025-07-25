import { getAssessment } from '@/action/interview'
import React from 'react'
import StatsCards from './_components/stats-cards'
import PerformanceChart from './_components/permormance-chart'
import QuizList from './_components/quiz-list'

const InterviewPage = async () => {

    const assessments= await getAssessment()

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-6xl font-bold gradient-title">
                Interview Preparation
                </h1>
            </div>
            <div className="space-y-6">
                <StatsCards assessments={assessments} />
                <PerformanceChart assessments={assessments} />
                <QuizList assessments={assessments} />
            </div>
        </div>
    )
}

export default InterviewPage