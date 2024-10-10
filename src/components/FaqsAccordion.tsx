import React, { useState } from 'react';

const FaqsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es el bagazo de caña de azúcar?",
      answer: "Es un subproducto natural proveniente de la fabricación del azúcar que es biodegradable en compost. Es doblemente circular: aprovechamos un descarte de la producción de azúcar como materia prima y luego el descarte de los envases también es circular, ya que sirve como abono para las plantas en el compost."
    },
    {
      question: "¿Cuánto tiempo tarda un envase de bagazo de caña de azúcar en degradarse?",
      answer: "En condiciones de compostaje industrial, nuestros envases pueden descomponerse completamente en un plazo de 60 a 90 días. En compostaje doméstico, puede tardar un poco más, dependiendo de las condiciones, pero es de aproximadamente 180 días. Podés pedirnos los certificados internacionales de biodegradabilidad en compost casero otorgados por la agencia TUV Austria."
    },
    {
      question: "¿Los envases de bagazo de caña de azúcar son más caros que los de plástico?",
      answer: "En general tienen un costo ligeramente mayor, pero el valor que agregan es significativo. No solo contribuyen a reducir la huella de carbono y el impacto ambiental, sino que también mejoran la imagen de marca al mostrar un compromiso con la sostenibilidad. Nuestro packaging agrega valor a las empresas de nuestros clientes."
    },
    {
      question: "¿Los envases compostables son aptos para microondas y freezer?",
      answer: "Sí, todos nuestros envases compostables son aptos para su uso en microondas y freezer. Pueden soportar temperaturas tanto altas como bajas, manteniendo su integridad y seguridad alimentaria."
    },
    {
      question: "¿Se pueden utilizar los envases para líquidos calientes?",
      answer: "¡Claro! Nuestro packaging de bagazo de caña de azúcar está diseñado para ser utilizado con líquidos calientes sin alterar su resistencia ni estructura. Son ideales para sopas, café y otros líquidos calientes."
    },
    {
      question: "¿Los envases son personalizables?",
      answer: `Sí, ofrecemos envases personalizables en los que se pueden hacer impresiones. Es una excelente manera de maximizar la inversión comunicando marca y frases mientras se contribuye al cuidado del ambiente.`,
      link: "https://drive.google.com/file/d/1A25POpzYn14TwWSYchPzSmnNrIV1Doeu/view?usp=sharing"
    },
    {
      question: "¿Ofrecen envíos a todo el país?",
      answer: "Sí, realizamos envíos a todo el territorio nacional con cargos que varían según la región. No te preocupes, trabajamos con las mejores empresas de logística para llegar de manera económica a cada ciudad de Argentina."
    },
    {
      question: "¿Tienen una política de devoluciones?",
      answer: "Sí, ofrecemos cambios o devoluciones dentro de un período de 72 horas después de la compra. Si tenés algún inconveniente con el producto, podés ponerte en contacto con nosotros y lo resolveremos a la brevedad."
    }
  ];

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item text-sm text-left">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <span className='font-medium mr-3'>{faq.question}</span>
            <img
              className="w-4 h-4 transform transition duration-200 ease-in-out"
              src="/accordionarrow.png"
              alt="Toggle accordion"
              // Opcional: Animación de rotación
              style={activeIndex === index ? { transform: 'rotate(180deg)' } : {}}
            />
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
              {index === 5 && (
                <a 
                  href={faq.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="no-underline text-gray-900"
                >
                  <div className="mt-2 text-left">
                    <span className="text-base font-normal">Ver más →</span>
                  </div>
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqsAccordion;