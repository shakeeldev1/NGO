import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
// import NotFound from './pages/NotFound';

import AboutPage from './pages/AboutPage';
import Donations from './components/home/Donations';
import AchievementsPage from './pages/Achievements';
import ContactPage from './pages/ContactPage';
import BloodCollection from './components/home/BloodCollection';

import SurveysMonitoringCard from './components/home/Survey';
import Workshop from './components/home/Workshop';

import Education from './components/home/Education';
import Healthcare from './components/home/Healthcare';
import Consultancy from './components/home/consultancy';
import Awareness from './components/home/Awareness';



function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} /> 
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/consultancy" element={<Consultancy />} />
                    <Route path='/awareness' element={<Awareness/>} />
                    {/* <Route path="*" element={<NotFound />} /> */}
                    <Route path="/achievements" element={<AchievementsPage />} />

                    <Route path="/services/survey" element={<SurveysMonitoringCard />} />
                    <Route path="/services/workshops" element={<Workshop />} />

                    <Route path="/education" element={<Education />} />
                    <Route path="/health" element={<Healthcare />} />
                    <Route path="/health" element={<Healthcare />} />
                    <Route path="/donations" element={<Donations />} />
                    <Route path="/blood-collection" element={<BloodCollection />} />

                </Routes>
            </Layout>
        </Router>
    );
}

export default App;