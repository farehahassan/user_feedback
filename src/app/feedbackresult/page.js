"use client"

// import React from 'react'
import { db , auth } from '../firebaseConfig'
import React , {useEffect , useState} from 'react'
import {  collection, doc, getDocs} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
// import {auth} from "../app/firebaseConfig"
import { useRouter } from "next/navigation";
import { signOut } from 'firebase/auth'


async function fetchDataFromFirestore(){
    const querySnapshot = await getDocs(collection(db,"Feed-back"))

    const data=[];
    querySnapshot.forEach((doc)=>{
        data.push({id: doc.id , ...doc.data()})
    });
    return data;
}
const page = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    if(!user){
     router.push('/')
    }


    const [userData , setUserData] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const data = await fetchDataFromFirestore();
            setUserData(data);
        }
        fetchData();
    } , [])

  return ( 
    <main className='flex min-h-screen flex-col items-center justift-between p-24'>
        <h1 className='text-5xl font-bold'>
    User Feedback data
        </h1>
        <div  >
            {userData.map((user)=>(
                    <div key={user.id} className='mb-4'>
                        <p className='text-xl font-bold'>{user.username}</p>
                        <p className='text-l '>{user.email}</p>
                        <p className='text-l '>{user.message}</p>
                    </div>
            ))}
        </div>
        <div className="text-center">
          <button
          onClick={()=> signOut(auth)}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >Log Out</button>
        </div>
    </main>
  )
}

export default page
