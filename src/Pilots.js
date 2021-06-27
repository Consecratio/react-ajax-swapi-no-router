import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pilots = (props) => {
    const [pilotInfo, setPilotInfo] = useState([])

    useEffect(() => {
        
    })

    return (
        <div>
            Pilots: {props.pilotData}
        </div>
    )
}

export default Pilots