import React, { useContext } from 'react'

import "./styles.scss"
import authentication from "assets/sign_in.svg"
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import appContext from 'context/app.context';

const LoginPage: React.FC = () => {

    const { setViewLoginMenu, setIsAuthenticated } = useContext(appContext);

    return (
        <div className='loginPage m-5'>
            <div className='w-full justify-end flex'>
                <CloseIcon onClick={() => setViewLoginMenu(false)} />
            </div>
            <img src={authentication} alt="" className='login__illustration' />
            <h1 className='font-semibold text-lg py-5'>Welcome to Cashify</h1>
            <p className='text-sm'>Please enter your phone number</p>
            <div className='mobile__input shadow flex p-3 my-3 br-5 rounded-md'>
                <p>+91</p>
                <input type="text" className='border-transparent px-3 outline-transparent' placeholder='Mobile' />
            </div>
            <div className='mobile__input shadow flex p-3 my-3 br-5 rounded-md'>
                <input type="password" className='border-transparent px-3 outline-transparent' placeholder='Password' />
            </div>
            <div className="terms__wrapper flex items-center">
                <Checkbox /> <p className='text-sm'>I agree to the Terms and Conditions</p>
            </div>
            <button className='btn btn__primary my-10' onClick={() => {setIsAuthenticated(true); setViewLoginMenu(false)}}>Continue</button>

        </div>
    )
}

export default LoginPage
