import React from 'react'
import AchievementsSection from '../components/achievements/AchievementsSection'
import ImpactNumbersSection from '../components/achievements/ImpactNumbersSection'
import AchievementAreas from '../components/achievements/AchievementAreas'
import JourneyAndImpact from '../components/achievements/JourneyAndImpact'
import Gallery from '../components/achievements/Gallery'
import PartnersAndCTA from '../components/achievements/PartnersAndCTA'

const Achievements = () => {
  return (
    <div>

    <AchievementsSection />
    <ImpactNumbersSection />
    <AchievementAreas />
    <JourneyAndImpact />
    <Gallery />
    <PartnersAndCTA />

    </div>
  )
}

export default Achievements