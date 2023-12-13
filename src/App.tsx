import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ProfileView from './components/ProfileView';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<SearchBar />} />
                {/* Assuming ProfileView takes an id parameter for individual profiles */}
                <Route path="/profile/:id" element={<ProfileView name={''} description={''} />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
