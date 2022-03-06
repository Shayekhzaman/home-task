import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {useHistory} from 'react-router-dom';
// import Button from '@material-ui/core/Button';

const Login = () => {
const history = useHistory();
  
    
    return (
        <div className="body">
            <h1>You're welcome </h1> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum at repellat laboriosam blanditiis molestiae! A quae accusamus distinctio eaque voluptatem nostrum beatae veniam, voluptate esse excepturi ipsum nulla quibusdam doloribus quis dicta perspiciatis, debitis soluta. Aliquid modi neque sint nulla libero est reprehenderit possimus! Obcaecati aperiam consequatur quis aliquam? Quae sint corporis soluta incidunt quis sed pariatur, deserunt laborum. Asperiores error corrupti sunt architecto neque rem alias perferendis, magnam, illum ipsa amet quidem voluptates doloremque! Fuga fugit assumenda facere nihil suscipit excepturi quis aliquid dolorum voluptate ea mollitia, laboriosam commodi adipisci. Quae commodi vero quod rem perspiciatis? Fugiat sit autem reprehenderit? Delectus, nobis quidem ea fugit error quas ut quos mollitia autem ducimus sequi quo nulla illo, similique optio.</p>
            <button onClick={()=> history.push('/')}>Logout</button>
        </div>
    );
};

export default Login;