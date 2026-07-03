import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className="container">
            <div className="p-5 text-center bg-light-dark rounded-3 mt-5">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className="text-light lead">Predict stock prices with our advanced machine learning models.</p>
                 <Button text="Login" class="btn-outline-info"/>
            </div>
        </div>
    </>
    
  )
}

export default Main