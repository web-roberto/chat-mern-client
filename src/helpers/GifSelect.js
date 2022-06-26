import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';
import { circularProgressClasses } from '@mui/material';

export const GifSelect = () => {
  let selection;
  const [icon, setIcon] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const { chatState } = useContext(ChatContext);
  const { socket } = useContext(SocketContext);
  const { auth } = useContext(AuthContext);

  const handleChange = (event) => {
    //  const next=event.target.value
    const selection = event.target.value;
    // console.log(document.getElementById('demo-simple-select-label').value);
    setIcon(selection);
    console.log(selection);
    console.log(
      'valor de SELECTION antes de coger la url del icono: ',
      typeof selection
    );

    switch (selection) {
      case 6:
        setMensaje(
          'https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif6_g7os4p.webp'
        );
        break;
      default:
        console.log('no es el 6');
        break;
    }
    // if ( selection == 0 ){setMensaje(''); return; }
    // if ( selection == 1 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif1_wa4r5r.webp");
    // if ( selection == 2 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif2_yypn8a.webp");
    // if ( selection == 3 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg");
    // if ( selection == 4 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif4_yqiprg.jpg");
    // if ( selection == 5 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif5_qmw6bo.jpg");
    // if ( selection == 6 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif6_g7os4p.webp");
    // if ( selection == 7 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif7_useesv.webp");
    // if ( selection == 8 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif7_useesv.webp");
    // if ( selection == 9 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif9_xjbthy.webp");
    // if ( selection == 10 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif10_p58ipq.webp");
    // if ( selection == 11 ) setMensaje("https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif11_l07gvl.webp");
    // EL BOTON ESTA EN OTRO FICHERO ¿¿FUNCIONARA??
    //document.querySelector('#send_btn').click();
    // setIcon(1);
    console.log(
      'valor de SELECTION despues de coger la url del icono: ',
      selection
    );

    console.log('MENSAJE DE SELECCION (antes del EMIT): ', mensaje);

    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      //  mensaje:"icono"+selection
      //  mensaje: "https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg alt=\"icon\" width=\"60\" height=\"60\""

      //   //mensaje: "https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg"
      mensaje,
    });
    console.log('MENSAJE DE SELECCION:(despues del EMIT): ', mensaje);
    document.querySelector('#send_btn').click();
    //   setMensaje('');
    // document.querySelector('#demo-simple-select').click();
    // setMensaje('');
  };

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="css/lib/control/iconselect.css"
        />
      </Helmet>
      <script
        type="text/javascript"
        src="../src/helpers/lib/control/iconselect.js"
      ></script>
      <script
        type="text/javascript"
        src="../src/helpers/lib/iscroll.js"
      ></script>
      <script
        type="text/javascript"
        src="../src/helpers/lib/iconos.js"
      > </script>
    </>

    /*
    <Box sx={{ maxWidth: 100, maxHeigh: 50 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {' '}
          <img
            src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg"
            alt="icon"
            width="30"
            height="30"
          />{' '}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={icon}
          label="Icon"
          onChange={handleChange}
          autoComplete="off"
        >
          <MenuItem value={0}>
            <img
             // src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif1_wa4r5r.webp"
             src="https://res.cloudinary.com/web-roberto/image/upload/v1656245990/gifs/carasorpresa_gxb8rc.gif"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={1}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1656245984/gifs/caratriste_dzhx0m.gif"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={2}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif3_mw5eao.jpg"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={3}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif4_yqiprg.jpg"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={4}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif5_qmw6bo.jpg"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={5}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif6_g7os4p.webp"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={6}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif7_useesv.webp"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={7}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif8_uy6iqj.webp"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={8}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif9_xjbthy.webp"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={9}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif10_p58ipq.webp"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
          <MenuItem value={10}>
            <img
              src="https://res.cloudinary.com/web-roberto/image/upload/v1644088908/gifs/gif11_l07gvl.webp"
              alt="icon"
              width="50"
              height="50"
            />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>*/
  );
};
