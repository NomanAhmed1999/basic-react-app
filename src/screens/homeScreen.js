import React from "react";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../../src/styles/home-screen.css'

const HomeScreen = () => {
    return (
        <div style={styles.container}>
            <h1><Link to="/about">Hello React App</Link></h1>
        </div>
    )
};

export default HomeScreen;


const styles = {
    container: {
        backgroundColor: "red",
    }
}