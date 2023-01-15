import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'


function App() {
  const [gitHubStatus, setGitHubStatus] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/learningToCode1234')
    .then(res => res.json())
    .then(data => {
      setGitHubStatus(data.site_admin)
    })
  }, [])


  console.log(gitHubStatus.toString())
  

  return (
    <div className="App">
      <h1>Github Admin Status:</h1>
      <h2>Site_Admin: {gitHubStatus.toString()}</h2>
    </div>
  );
}

export default App;
