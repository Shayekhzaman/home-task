import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <Link to="/login"> Already register?</Link>
        </div>
    );
};

export default Register;