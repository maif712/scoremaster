


import React from 'react'

export default function HeroSection() {
    return (
        <section>
            <div className="hero-section">
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="hero-title">Dominate the leaderboard with <span>score master</span></h1>
                    <p className="hero-description">The ultimate platform for tracking and managing game socre and player statistic!
                    Whether you're organizing a friendly competition among friends or managing a professional gaming leage. Create players, input score, and watch as our leaderboard
                    dynamicly updates to showcase the top player.</p>
                </div>
                <div className="hero-mask"></div>
            </div>
        </section>
    )
}
