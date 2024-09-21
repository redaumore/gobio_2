import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import GobioFooter from '../components/GobioFooter';
import FaqsAccordion from '../components/FaqsAccordion';

const FaqsPage: React.FC = () => {
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
    <div className='font-montserrat h-screen max-w-1440'>
      <div className="mx-auto p-4 bg-white div-align-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Preguntas <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-eco1 via-eco2 50% via-eco3 75% to-eco4">frecuentes.</span>
        </h2>
        <p className="text-center text-gray-600 max-w-xl mb-0 mx-auto mx-10">
          Si tenés alguna duda puntual podes escribirnos en la sección de contacto.
        </p>
        <div className="text-center font-semibold mb-12 mt-8">
          <a href={"/contacto"} className="text-black no-underline">Contacto →</a>
        </div>
        <div className=" container mt-8 sm:mt-0 grid grid-cols-1 max-w-xl">
          <div className="bg-gray-100 rounded-lg shadow-md container mx-auto flex flex-col justify-center">
          <FaqsAccordion />
          </div>
          </div>
        </div>
      </div>
  );
};

export default FaqsPage;