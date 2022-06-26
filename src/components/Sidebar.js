import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {
  const { chatState } = useContext(ChatContext);
  const { auth } = useContext(AuthContext);

  const { uid } = auth;

  return (
    <div className="inbox_chat">
      {chatState.usuarios
        .filter((user) => user.uid !== uid)
        .map((usuario) => (
          <SidebarChatItem key={usuario.uid} usuario={usuario} />
        ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
      {/* <!-- muestra imagen si la hay y crea un div adrede --> */}

      {
        //si response.urlsegura
        // (note.url) //si http la muestra aqui SABER SI ES IMAGEN O NO
        // && (
        <div className="notes__image">
          {/* <img 
                               // src={ note.url }
                               src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif1_wa4r5r.webp"
                                alt="imagen"
                            /> */}
          <video controls autoPlay min-height="450" width="100%">
            <source
              src="https://res.cloudinary.com/web-roberto/video/upload/v1656244592/anastasya_yoq8ly.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        // )
      }
    </div>
  );
};
