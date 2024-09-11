import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import GobioFooter from '../components/GobioFooter';

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
    
    // Here you would typically send the form data to your backend
    // For this example, we'll just log it to the console
    console.log({ name, email, phone, message, captchaValue });
    
    // Reset form after submission
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCaptchaValue(null);
    alert('Formulario enviado con éxito');
  };

  return (
    <div className='font-montserrat'>
      <div className="mx-auto p-4 bg-white">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Pedínos una <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">muestra.</span>
        </h2>
        <p className="text-center text-gray-600 max-w-xl mb-0 mx-auto mx-10">
          Completá el formulario y te contactaremos para coordinar la entrega de tu muestra sin costo.
        </p>
        <p className="text-center text-gray-600 mt-0 mb-8 max-w-xl mx-auto">
          ¡Queremos que los veas y pruebes por vos mismo!
        </p>
        <div className="mt-8 sm:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-300 rounded-lg shadow-md container mx-auto flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className='relative'>
                <input
                  type='text'
                  id="name"
                  name="name"
                  required
                  value={name}
                  placeholder='Nombre'
                  onChange={(e) => setName(e.target.value)}
                  className="w-5/6 max-w-full mx-4 mt-4 pb-2 border border-transparent rounded-md shadow-sm text-sm"
                />
              </div>
              <div className='relative'>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                className="w-5/6 max-w-full mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm"
              />
              </div>
              <div className='relative'>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={phone}
                placeholder='Teléfono'
                onChange={(e) => setPhone(e.target.value)}
                className="w-5/6 max-w-full mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm"
              />
              </div>
              <div className='relative'>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={message}
                placeholder='Mensaje'
                onChange={(e) => setMessage(e.target.value)}
                className="w-5/6 max-w-full mx-4 py-2 border border-transparent rounded-md shadow-sm text-sm"
              ></textarea>
              </div>
              <div className='relative'>
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(value) => setCaptchaValue(value)}
              />
              </div>
              <div className='relative'>
                <button
                type="submit"
                className="w-5/6 max-w-full mb-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Enviar
                </button>
              </div>
              
            </form>
          </div>
          <div className="md:block">
            <img
              src="/contacto-form-image-mobile.png"
              alt="Muestra de producto"
              className="rounded w-full"
            />
          </div>
        </div>
      </div>
      <GobioFooter />
    </div>
  );
};

export default ContactoPage;