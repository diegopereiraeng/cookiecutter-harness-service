import React from 'react'

function App() {
  return (
    <div style={{ '{{' }} fontFamily: 'sans-serif', padding: '2rem' {{ '}}' }}>
      <h1>{{ cookiecutter.service_name }}</h1>
      <p>{{ cookiecutter.service_description }}</p>
    </div>
  )
}

export default App
