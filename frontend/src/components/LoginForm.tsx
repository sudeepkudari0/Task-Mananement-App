import axios from 'axios';
import { FormEvent, useState } from 'react'
import { useSignIn } from 'react-auth-kit';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = useSignIn();
    const API = import.meta.env.VITE_API;
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        try {
            const response = await axios.post(`${API}/api/v1/auth/signin`, {
                email: email, password: password
            })
            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { email }
            })
            console.log(response.data);
            if (response.data.success === true) {
                console.log(response.data);
                localStorage.setItem('userId', response.data.user.id);
                window.location.href = '/'
            }
        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='flex flex-row w-full h-screen justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='m-5'>
                    <h1 className='text-3xl font-extrabold'>Sign In</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 w-[600px] justify-center items-center'>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold' id='email' type="text" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 border-white border-2 rounded-lg p-3 font-bold'
                                type="password" id='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <input className='w-96 h-10 bg-[#6741D9] cursor-pointer p-2 rounded-lg p-3 font-bold' type='submit' value='Sign in' />
                        </div>
                    </div>
                </form>
                <div className='m-5'>
                    <a href="/signup">
                    <h1 className='text-[15px] cursor-pointer'>New Registration?</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm