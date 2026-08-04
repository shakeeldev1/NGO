import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ContactPage from './pages/ContactPage';
function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;