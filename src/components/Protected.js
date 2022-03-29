import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

const { REACT_APP_CLOUD_HOST_URL } = process.env;
const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;

export default function Protected(props) {
  const [authenticated, setAuthenticated] = useState(true);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    async function isAuthenticated() {
      try {
        if (process.env.NODE_ENV === 'development') {
          await axios.get('http://localhost:8000/session/', { withCredentials: true });
        } 
        else if (process.env.NODE_ENV === 'production') {
          await axios.get(`${cloudBaseUrl}/session/`, { withCredentials: true });
        }
        setLoading(false);
      } catch (err) {
        console.log(err.response);
        setAuthenticated(false);
      }
    }
    isAuthenticated();
  }, []);

  if (!authenticated) {
    return <Redirect to={'/login'} />
  }

  return (
    <>
      {!loading ? props.children : false}
    </>
  )
}
