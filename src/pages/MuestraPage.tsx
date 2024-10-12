import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { enviarEmail } from '../api/enviar-email';

interface DatosFormulario {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactoPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Por favor, complete el captcha');
      return;
    }
    
    try {
      const datosFormulario: DatosFormulario = { name: name, email, phone: phone, message: message };
      await enviarEmail(datosFormulario, captchaValue);
      
      // Resetear el formulario después del envío exitoso
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setCaptchaValue(null);
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el email:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className='font-montserrat'>
      <div className="mx-auto p-4 bg-white div-align-center max-w-[1086px]">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Pedinos una <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">muestra.</span>
        </h2>
        <p className="text-center text-gray-600 max-w-xl mb-0 mx-auto mx-10">
          Completá el formulario y te contactaremos para coordinar la entrega de tu muestra sin costo.
        </p>
        <p className="text-center text-gray-600 mt-0 mb-8 max-w-xl mx-auto">
          ¡Queremos que los veas y pruebes por vos mismo!
        </p>
        <div className=" container mt-8 sm:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 max-w-[886px]">
          <div className="bg-gray-100 rounded-lg shadow-md container mx-auto flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className='relative flex'>
                <input
                  type='text'
                  id="name"
                  name="name"
                  required
                  value={name}
                  placeholder='Nombre'
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mx-4 mt-4 pb-2 pr-0 border border-transparent rounded-md shadow-sm text-sm placeholder:text-slate-300"
                />
              </div>
              <div className='relative flex'>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm placeholder:text-slate-300"
              />
              </div>
              <div className='relative flex'>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={phone}
                placeholder='Teléfono'
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm placeholder:text-slate-300"
              />
              </div>
              <div className='relative flex'>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={message}
                placeholder='Mensaje'
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm placeholder:text-slate-300"
              ></textarea>
              </div>
              <div className='relative flex'>
                <ReCAPTCHA
                  sitekey="TU_CLAVE_DE_SITIO_RECAPTCHA"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>
              <div className='relative flex'>
                <button
                type="submit"
                className="w-full mx-4 mb-4 py-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 tracking-widest font-montserrat"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="block bg-[url('/contacto-form-image-mobile.png')] bg-cover bg-center bg-no-repeat w-full h-full aspect-square rounded-xl md:rounded-r-xl md:rounded-l-none ">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
