import React from 'react';
import { useHistory } from 'react-router';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {       
    const { push } = useHistory()
    axiosWithAuth()
        .post('/logout')
        .then(res => {
            localStorage.removeItem('token')
            push('/')
        })
        .catch(err => {
            console.log(err)
        })
    return(
        <div>
            <h2>You have successfully logged out!!</h2>
        </div>);
}

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.