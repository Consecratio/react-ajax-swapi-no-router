import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pilots = (props) => {
    const [pilotInfo, setPilotInfo] = useState([])

    useEffect(() => {
        if(props.pilotData.length !== 0) {
            axios.all(props.pilotData.map(url => axios.get(url)))
                .then(axios.spread(function(...res) {
                    let pilotRes = res.map(each => each.data)
                    setPilotInfo(pilotRes)
                }))
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])

    let nameDisplay = []

    if(props.pilotData.length === 0) {
        nameDisplay = <li>No Pilots</li>
    } else {
        nameDisplay = pilotInfo.map(pilot => {
            return (
                <li>{pilot.name}</li>
            )
        })
    }

    return (
        <div>
            <h4>Pilots:</h4>
            <ul>
                {nameDisplay}
            </ul>
        </div>
    )
}

export default Pilots