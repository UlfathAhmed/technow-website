import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export default function map (){
    const {isLoaded} = useLoadScript ({googleMapsApiKey: "AIzaSyDh3l6G9Y1QEHikiPnBKHBHWQ9FBG-yHj0"});
    if(!isLoaded){
        return <div>Loading....</div>
    }

    return <GoogleMap  zoom={10} center={{lat: -8.832565374413473,lng: 13.236752710746973}} mapContainerClassName='w-full h-full overflow-clip rounded-xl' > </GoogleMap>


}
