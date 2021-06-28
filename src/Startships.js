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
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [apiUrl])

    const shipNames = starships.map((ship, index) => {
        return (
            <div className="card ml-2 mb-2" key={index}>
                <h5 className="card-header"><strong>{ship.name}</strong></h5>
                <div className="card-body">
                    <h6 className="card-title"><strong>Class:</strong> {ship.starship_class}</h6>
                    <Pilots pilotData={ship.pilots} />
                </div>
            </div>
        )
    })
 
    return(
        <div className="row">
            {shipNames}
        </div>
    )
}

export default Starships