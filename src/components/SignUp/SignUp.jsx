import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const [success, setSuccess]=useState(false);

    const [errorMessage, setErrorMessage]= useState('');

    const [showPassword, setShowPassword]= useState(false);

    const handleSignUp = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const terms = e.target.terms.checked;
        //console.log(e.target.email.value);
        //concole.log(e.target.password.value);
        console.log(email, password, terms);

       //reset error and status
       setErrorMessage('');
       setSuccess(false);

       if(!terms){
        setErrorMessage('Please accept our terms and condition');
        return ;
       }

       if(password.length<6){
        setErrorMessage('password should be 6 characters or longer ');
        return;
       }

       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;
       if(!passwordRegex.test(password)){
            setErrorMessage('At least apply specail Character');
            return;
       }


        //create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
            setSuccess(true);
        })
        .catch(error=>{
            console.log('Error', error.message);
            setErrorMessage(error.message)
            setSuccess(false);
        })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-2xl ml-4 font-bold">Sign Up now!</h3>
            <div  className="card-body">
                <form onSubmit={handleSignUp} className="form">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    {/* <input type="password" name='password' className="input" placeholder="Password" />
                     
                     <button className='btn btn-xs absolute right-12 top-1/2  '>
                        <FaEye ></FaEye>
                     </button> */}

                    

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="input w-full pr-10"
                            placeholder="Password"
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                            className="btn btn-xs btn-ghost absolute right-2 top-1/2 transform -translate-y-1/2"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" name='terms' className="checkbox checkbox-primary" />
                            <span className="label-text">Accept Our Terms And Condition.</span>
                            
                        </label>
                    </div>

                    <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                {
                    errorMessage && <p className='tesxt-red-600'>{errorMessage}</p>
                }

                {
                    success && <p className='text-green-600'>Sign up is Sucessful.</p>
                }
            </div>
        </div>
    );
};

export default SignUp;