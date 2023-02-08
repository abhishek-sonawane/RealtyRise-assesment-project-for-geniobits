import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { db,auth } from '../firebase.config'
import { doc,getDoc } from 'firebase/firestore'


function SingleListing() {
    const params = useParams()
    const navigate = useNavigate()
    const [listing,setlisting] = useState(null)

    useEffect(()=>{
        const getSingleListing =async ()=>{
            const docref = doc(db,'listings',params.listingId)
        const querySnapshot = await getDoc(docref)
        console.log(querySnapshot.data())
        setlisting(querySnapshot.data())
        }
        getSingleListing()
    },[params.listingId])
    const senderemail = 'abhisheksonwane57@gmail.com'

   const mailtoRef = `mailto:${senderemail}?subject=SendMail&body=Description`

  if(listing){
    return(
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  {listing.imgUrls&&<img src={listing.imgUrls[0]} className="max-w-sm rounded-lg shadow-2xl width='100'" alt="" />}
    
    <div>
      <h1 className="text-5xl font-bold">{listing.name}</h1>
      <h3 className='text-3xl font-semibold ' >{listing.location}</h3>
      <p className="py-6">{listing.location}</p>
      <button className="btn btn-primary"> <a href={mailtoRef}>contact seller</a></button>
    </div>
  </div>
    

  {/* <div>
            <h2>{listing.name}</h2>
            <h4>{listing.location}</h4>
            
            <a href={mailtoRef}>contact seller</a>
    
        </div> */}





</div>
       
      )
  }
}

export default SingleListing