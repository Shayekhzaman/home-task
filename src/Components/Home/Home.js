import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <div className='header'>
            {/* <Link to='/home'>Home</Link> */}
            {/* <Link to='/register'>Register</Link> */}
            {/* <Link to='/login'>Login</Link> */}
            <Link to='/google'>Sign With Google</Link>
        </div>
    );
};

export default Home;