import React from 'react'
import { horaMes } from '../helpers/horaMes'

export const IncomingMessage = ({ msg }) => {

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    {                    
                     (msg.mensaje.startsWith('https://res.cloudinary.com')) ? 
                        (msg.mensaje.endsWith('.mp4')) ? 
                        <video controls autoPlay min-height="450" width="100%">
                                <source src={ msg.mensaje} type="video/mp4" />
                            </video>
                        :   <span><img src={ msg.mensaje}/></span> 
                    :<p>{ msg.mensaje }</p>
                    }                             

                    <span className="time_date"> { horaMes( msg.createdAt ) }</span>
                </div>
            </div>
        </div>
    )
}
