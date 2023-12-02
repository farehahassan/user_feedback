import Link from 'next/link'
import React from 'react'


const linkss = () => {
  return (
    <>
    <div className="p-20 text-4xl font-bold  ">
        <Link href="/userfeedback" className="bg-blue-200 p-10 rounded-lg hover:bg-blue-300" placeholder="click here">Fill Feedback form here</Link>
    </div>

    {/* <div className="p-20 text-4xl font-bold  ">
        <Link href="/feedbackresult" className="bg-blue-200 p-10 rounded-lg hover:bg-blue-300" placeholder="click here"> Feedback results</Link>
    </div> */}

    <div className="p-20 text-4xl font-bold  ">
        <Link href="/log-in" className="bg-blue-200 p-10 rounded-lg hover:bg-blue-300" placeholder="click here"> Log In to check FeedBack results</Link>
    </div>
    </>
  )
}

export default linkss
