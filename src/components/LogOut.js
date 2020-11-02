import React from 'react'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom';
const cookies = new Cookies();
function LogOut(props) {
    const LogOut = async (e) => {
        e.preventDefault();
        cookies.remove('userId');
        cookies.remove('isLogged')
        window.location.href = '/Jobs4Students/signin'
    }

    console.log(props.isLogged);
    if (props.isLogged) {
        return (
            <Link className="nav-link" aria-disabled="true" to='#' onClick={LogOut}>LogOut</Link>
        )
    } else {
        return (
            <div className='row'>
                <Link className="nav-link" aria-disabled="true" to='/Jobs4Students/signin'>Login</Link>
                <Link className="nav-link" aria-disabled="true" to='/Jobs4Students/signup'>Sign Up</Link>
            </div>
        )

    }
}
export default LogOut;
