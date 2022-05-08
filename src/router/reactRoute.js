import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './../screens/about';
import HomeScreen from './../screens/homeScreen';


const ReactRouter = () => (
    <Router>
        <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/about' element={<About />} />
        </Routes>
    </Router>
)

export default ReactRouter;