import axios from 'axios'
import React, { FormEvent, useState } from 'react'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ fname, setFname] = useState('')
    const [ lname, setLname] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(email, password, fname, lname);
        
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/signup', {
                first_name: fname, last_name: lname, email, password
            })
            console.log(response.data);
            if (response.status === 201) {
                alert('Account created successfully')
                window.location.href = '/login'
            }
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div className='flex flex-row w-full h-screen justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='m-5'>
                    <h1 className='text-3xl font-extrabold'>Create Account</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 w-[600px] justify-center items-center'>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold' type="text" placeholder="First Name" value={fname}
                                onChange={(e) => setFname(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold' type="text" placeholder="Last Name" value={lname}
                                onChange={(e) => setLname(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold' type="text" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold'
                                type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 bg-[#6741D9] cursor-pointer p-2 rounded-lg p-3 font-bold' type='submit' value='Sign up' />
                        </div>
                    </div>
                </form>
                <div className='m-5'>
                    <h1 className='text-[15px] cursor-pointer'>New Registration?</h1>
                </div>
            </div>
        </div>
  )
}

export default SignupForm