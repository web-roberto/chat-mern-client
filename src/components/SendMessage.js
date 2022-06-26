/* eslint-disable react/style-prop-object */
import { shadows } from '@mui/system';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';
//import { Example } from '../Example';
import { fileUpload } from '../helpers/fileUpload';

import { GifSelect } from '../helpers/GifSelect';
import UploadWidget from '../uploadwidget';

let cont = 0;
const handlePictureClick = () => {
  document.querySelector('#fileSelector').click();
  //  document.getElementById("mensaje").focus();
};
// let objwidget;

// const widget = window.cloudinary.openUploadWidget({
//     cloudName: "web-roberto",
//     uploadPreset: "chatdb"},
//     (error, result) => {checkUploadResult(result)});

// const showWidget = (widget) => {
//     Swal('voy a abrir dialogo','error')
//     widget.open();   }

//  const checkUploadResult = (resultEvent) => {
//     if(resultEvent.event === 'success'){
//       console.log(resultEvent)
//     }
//   }
//   const handlePictureClick = () => {
//   //  document.querySelector('#fileSelector').click();
//     document.getElementById("mensaje").focus();

// }

export const SendMessage = () => {
  const [mensaje, setMensaje] = useState('');
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);
  const { chatState } = useContext(ChatContext);

  const onChange = ({ target }) => {
    setMensaje(target.value);
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    //document.querySelector('#send_btn').click();cont=0;
    console.log(
      'ANTES DE SUBIR EL FICHERO -ANTES DEL IF: el E.TARGE.FILES[0]: ',
      file
    );
    if (file) {
      console.log('ANTES DE SUBIR EL FICHERO -DENTRO DEL IF : ', file);
      // ya usa el syn/await y el try catch
      try {
        const fileUrl = await fileUpload(file);
        console.log('FICHERO SUBIDO A: ', fileUrl);
        if (fileUrl) {
          setMensaje(fileUrl);
          //CLICK SOBRE BOTON FORMULARIO
          //  document.querySelector('#send_btn').click();
          socket.emit('mensaje-personal', {
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje,
          });
          document.querySelector('#send_btn').click();
          setMensaje('');
        } else {
          Swal.fire('Error', 'No url after loading File', 'error');
        }
        //  document.querySelector('#buttonfileSelector').click();
      } catch (err) {
        Swal.fire('Error', 'Uploading the file', 'error');
        throw err;
      }
    } else {
      Swal.fire('Error', 'NO FILE SELECTED', 'error');
    }
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (mensaje.length === 0) {
      setMensaje('');
      return;
    }

    // TODO: Emitir un evento de sockets para enviar el mensaje
    //
    //     de: // UID del usuario enviando el mensaje
    //     para: // UID del usuario que recibe el mensaje
    //     mensaje: // lo que quiero enviar
    // }
    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje,
    });
    // TODO: hacer el dispatch de el mensaje...
  };

  return (
    <>
      {/* <div style="display: block;"> */}
      <div className="send_select_file">
        {/* <div className="col-sm-3"> */}

        {/* <div className="col-sm-9">    */}
        <div>
          <input
            id="fileSelector"
            type="file"
            name="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            id="buttonfileSelector"
            className="msg_send_btn mt-1"
            value="./"
            style={{ width: '140px' }}
            onClick={handlePictureClick}
          >
            Image/Video
          </button>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="type_msg row">
          <div
            className="col-sm-2"
            style={{ padding: '0px 0px 0px 0px !important' }}
          >
            <GifSelect />

            <script>
              {/* document.querySelector('#send_btn').click();
                    setMensaje('');     */}
            </script>
          </div>

          <div className="input_msg_write col-sm-8">
            <input
              type="text"
              id="mensaje"
              className="write_msg"
              placeholder="Mensaje..."
              value={mensaje}
              onChange={onChange}
              autoComplete="off"
            />
          </div>
          <div className="col-sm-2">
            <button id="send_btn" className="msg_send_btn mt-1" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
