import React from 'react';

const notFound = {
    display: 'flex',
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column",
    color: "crimson",
    marginTop: '150px'
}

function NotFound() {
  return <div style={notFound}>
        <h1 style={{fontSize:"80px"}}>404</h1>
        <h2 style={{fontSize:"40px"}}>Page Not Found</h2>
  </div>;
}

export default NotFound;
