import Swal from 'sweetalert2';

export const fileUpload = async ( file ) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/web-roberto/upload';

    const formData = new FormData();
    formData.append('upload_preset','chatdb');
    formData.append('file', file );
    Swal.fire({title:'Uploading...', text:'Please wait..',allowOutsideClick:false,
    onBeforeOpen: ()=>{Swal.showLoading();}});
    try {  
        console.log('VOY A HACER EL FETCH');      
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });          
        Swal.close();
        if ( !resp.ok ) {throw await resp.json();}   
  
        console.log('ROB- ANTES DEL AWAIT RESP.JSON Y ANTES DEL SECURE_URL: DESPUES DEL FETCH:');
        const cloudResp = await resp.json();
        console.log('ROB- SECURE_URL:',cloudResp.secure_url );
        return cloudResp.secure_url;
    } catch (err) {
        Swal.fire('Error', 'Uploading the file', 'error');
        throw err;
    }
    // return url de la imagen
}