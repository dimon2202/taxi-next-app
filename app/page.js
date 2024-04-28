"use client"

import GoogleMapSection from './../components/Home/GoogleMapSection'
import SearchSection from './../components/Home/SearchSection'
import { DestinationContext } from './../context/DestinationContext'
import { SourceContext } from './../context/SourceContext'
import { UserButton } from '@clerk/nextjs'
import { LoadScript, useJsApiLoader } from '@react-google-maps/api'
import Image from 'next/image'
import { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

export default function Home() {
  const [source,setSource]=useState([])
  const [destination,setDestination]=useState([])
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  // })
  return (
    <SourceContext.Provider value={{source,setSource}}>
      <DestinationContext.Provider value={{destination,setDestination}}>
      <LoadScript 
      libraries={['places']}
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <div className='p-0 grid grid-cols-1 md:grid-cols-3 gap-5 md:p-6'>
        <div className='absolute w-full z-10 md:relative md:z-auto z-10'>
            <SearchSection/>
        </div>
        <div className='col-span-2'>
            <GoogleMapSection/>
          </div>
      </div>
      </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  )
}