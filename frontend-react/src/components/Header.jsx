import React, {useContext} from 'react'
import Button from './Button'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
    const navidate = useNavigate();
    const handelLoggedout = () =>{
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        setIsLoggedIn(false)
        console.log("Loged out")
        navidate('/login')

    }
  return (
    <>
        <nav className="navbar container pt-3 pb-3 align-items-start">
            <Link className="navbar-brand text-light" to="/">
                Stock Prediction Portal
            </Link>

            <div>
                {isLoggedIn?(
                    <button className='btn btn-danger' onClick={handelLoggedout}>Logout</button>
                ):(
                    <>
                    <Button text="Login" className="btn-outline-info" url="/login"/>
                    &nbsp;
                    <Button text="Register" className="btn-info" url="/register"/>
                    </>
                )}
            </div>
        </nav>
    </>
  )
}

export default Header