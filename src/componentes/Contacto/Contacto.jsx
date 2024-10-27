import React, { useState } from 'react';
import './Contacto.css';
import { toast, Zoom  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');


  const validarInput = (input) => input.trim() !== '';


  const validarEmail = (email) => {
    const posicionArroba = email.indexOf('@');
    return posicionArroba !== -1 && posicionArroba !== 0 && posicionArroba !== email.length - 1;
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (validarInput(nombre) && validarInput(email) && validarEmail(email) && validarInput(asunto) && validarInput(mensaje)) {
      const params = {
        nombre,
        email,
        asunto,
        mensaje,
      };

      emailjs.send('service_5xe9weg', 'template_ktuglou', params)
        .then(() => {

          toast.success('Correo enviado correctamente. Me pondré en contacto contigo a la brevedad. Muchas gracias!', {
            position: "bottom-left",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
          setNombre('');
          setEmail('');
          setAsunto('');
          setMensaje('');
        })
        .catch(() => {
            toast.error('Ha ocurrido un error con el servidor', {
            position: "bottom-left",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
        });
    } else {
      toast.error('Ha ocurrido un error, el mail no ha sido enviado, revisar los campos ingresados ', {
        position: "bottom-left",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        });
    }
  };

  return (
    <section className="row justify-content-center container-fluid contacto my-5">
      <aux id="contacto"></aux>
      <h2 className="col-12 text-center">Contacto</h2>
      <p className="col-12 text-center">* Campo requerido</p>
      <form onSubmit={handleSubmit} className="col-12 col-md-8 p-5">
        <label htmlFor="nombre">Nombre y apellido *</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="d-block w-100 p-2 mb-2 rounded"
          placeholder="Ej. Lucas Perez"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label htmlFor="email">Email *</label>
        <input
          type="text"
          id="email"
          name="email"
          className="d-block w-100 p-2 mb-2 rounded"
          placeholder="Ej. lucasperez@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="asunto">Asunto *</label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          className="d-block w-100 p-2 mb-2 rounded"
          placeholder="Ej. Propuesta"
          value={asunto}
          onChange={(e) => setAsunto(e.target.value)}
          required
        />
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          name="mensaje"
          id="mensaje"
          className="d-block w-100 mb-2 rounded"
          placeholder=""
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="d-block w-50 p-2 mt-3 rounded"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
