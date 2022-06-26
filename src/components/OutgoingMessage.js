import React from 'react'
import { horaMes } from '../helpers/horaMes'

export const OutgoingMessage = ({ msg }) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
            {                    
                     (msg.mensaje.startsWith('https://res.cloudinary.com')) ? 
                        (msg.mensaje.endsWith('.mp4')) ? 
                        <video controls autoPlay min-height="450" width="100%">
                                <source src={ msg.mensaje} type="video/mp4" />
                            </video>
                        :   <span><img src={ msg.mensaje}/></span> 
                    :<p>{ msg.mensaje }</p>
                    }
                <span className="time_date"> { horaMes( msg.createdAt ) } </span>
            </div>
        </div>
    )
}
