import { useState } from 'react'

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="mb-4 text-primary">Exercise 2 - Bootstrap 5</h1>
          <p className="lead">This is a React application built with Bootstrap 5 as requested.</p>
          <div className="card shadow-sm mt-4">
            <div className="card-body">
              <h5 className="card-title">Bootstrap Component</h5>
              <p className="card-text">This is a sample Bootstrap card component to demonstrate the integration.</p>
              <button className="btn btn-primary">Primary Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
