import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Pilots from './Pilots'

const Starships = () => {
    const [starships, setStarships] = useState([])
    const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/starships/?page=1')
    
    useEffect(() => {
        if(apiUrl !== null){
            axios.get(apiUrl)
                .then(res => {
                    setStarships(starships.concat(res.data.results))
                    setApiUrl(res.data.next)
                    console.log(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [apiUrl])

    const shipNames = starships.map((ship, index) => {
        return (
            <div key={index}>
                <p>Name: {ship.name}</p>
                <p>Class: {ship.starship_class}</p>
                <Pilots pilotData={ship.pilots} />
            </div>
        )
    })
 
    return(
        <div>
            {shipNames}
        </div>
    )
}

export default Starships