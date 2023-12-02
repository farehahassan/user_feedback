'use client'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from "../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleLogIn = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password)
        console.log({res})
        sessionStorage.setItem('user', true)
        setEmail('');
        setPassword('')
        router.push("/feedbackresult")

    } catch(e){
        console.error(e)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button 
          onClick={handleLogIn}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignUp;