import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import api_url, { emailValidation } from '../../../utils/utils';

import { BlogDataContext } from '../../../context/Blog_Context';

function SignIn() {
    const navigate = useNavigate();
    const { user_data, setUserData } = useContext(BlogDataContext);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("")



    const changeInputHandler = (e) => {
        setFormData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value };
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (formData.password != '' && formData.password.length <= 6) {
            setMessage("Password Must Be Greater then 6 digits")
            setTimeout(() => {
                setMessage("")
            }, 2000)
            return;
        }


        if (formData.password == '' || formData.email == '') {
            if (formData.email == '') {
                setMessage("Email Required")
            } else {
                setMessage("Password Required")
            }
            setTimeout(() => {
                setMessage("")
            }, 2000)
        } else {


            if (emailValidation(formData.email)) {
                let data = {
                    "username": formData.username,
                    "password": formData.password,
                    "email": formData.email,
                }

                let url = `${api_url}/users/signin`;
                console.log(url);
                console.log(data);


                await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    }
                }).then(res => res.json())
                    .then((data) => {

                        setFormData({
                            email: "",
                            password: "",
                        });
                        console.log("SignIn -> ", data);
                        if (data.statusCode != 200) {
                            setTimeout(() => {
                                setMessage(data.message)
                            }, 3000);
                        } else {
                            console.log("set context data ", data.data);
                            setUserData(data.data);

                            // console.log(user_data);


                            localStorage.setItem("token", data.token);
                            navigate('/');
                        }
                    }).catch((e) => {
                        localStorage.removeItem("token");
                        navigate('/');
                        console.log(e);
                    })
            } else {
                setMessage("Email is Not Valid");
            }

        }


    };

    return (
        <section>
            <div className=" bg-gray-300 p-4 text-center min-h-screen flex justify-center items-center flex-col w-full ">
                {
                    message !== "" && <span className='absolute top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  bg5 px-6 py-2 mt-2 md:mt-0 rounded-xl text-sm'>{message}</span>
                }
                <h1 className='font-bold mb-2'>Sign In</h1>
                <form action="" method="POST" className="register_form">
                    {/* <p className="form_error_message">This is an Error Message</p> */}

                    <div className="input_container">
                        <input type="email" name='email' placeholder="Email" value={formData?.email} onChange={changeInputHandler} />
                    </div>
                    <div className="input_container">
                        <input type="password" name='password' placeholder="Password" value={formData?.password} onChange={changeInputHandler} />
                    </div>

                    <div className="input_container submit_container" onClick={onSubmit}>
                        <button className=' py-3' type="submit" >Submit</button>
                    </div>

                    <div className="input_container text-left" >
                        <p className='font-semibold'>Already have an Account ? <Link to={'/signin'}>Sign-In</Link></p>
                        <p className='font-semibold'>Don't have an Account ? <Link to={'/signup'}>Sign-Up</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignIn