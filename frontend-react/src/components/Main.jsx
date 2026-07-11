import Button from './Button'

const Main = () => {
  return (
    <>
        <div className="container">
            <div className="p-5 text-center bg-light-dark rounded-3 mt-5">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className="text-light lead">Predict stock prices with our advanced machine learning models.</p>
                 <Button text="Explor Now" class="btn-outline-info" url="/dashboard" />
            </div>
        </div>
    </>
    
  )
}

export default Main