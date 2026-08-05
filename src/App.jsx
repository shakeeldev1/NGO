import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AchievementsPage from './pages/Achievements';
import ContactPage from './pages/ContactPage';
import Consultancy from './components/home/consultancy';
import Awareness from './components/home/awareness';


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
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;