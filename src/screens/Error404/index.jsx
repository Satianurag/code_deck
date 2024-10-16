import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]); // Add navigate to the dependency array

  return (
    <div>No Page Found, Redirecting to home page</div>
  );
}

export default Error404;
