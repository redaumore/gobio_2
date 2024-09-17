import React, { useState } from 'react';

const FaqsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Los envases compostables son aptos para microondas y freezer?",
      answer: "Sí, todos nuestros envases compostables son aptos para su uso en microondas y freezer. Pueden soportar temperaturas tanto altas como bajas, manteniendo su integridad y seguridad alimentaria."
    },
    {
      question: "¿Se pueden utilizar los envases para líquidos calientes?",
      answer: "¡Claro! Nuestro packaging de bagazo de caña de azúcar está diseñado para ser utilizado con líquidos calientes sin alterar su resistencia ni estructura. Son ideales para sopas, café y otros líquidos calientes."
    },
    {
      question: "¿Qué es el bagazo de caña de azúcar?",
      answer: "Es un subproducto natural proveniente de la fabricación del azúcar que es biodegradable en compost. Es doblemente circular: aprovechamos un descarte de la producción de azúcar y luego el desecho del bagazo de caña también es circular, ya que sirve como abono en el compost."
    },
    {
      question: "¿Cuánto tiempo tarda un envase de bagazo de caña de azúcar en degradarse?",
      answer: "En condiciones de compostaje industrial, nuestros envases pueden descomponerse completamente en un plazo de 60 a 90 días. En compostaje doméstico, puede tardar un poco más, dependiendo de las condiciones, pero es de aproximadamente 180 días. Podés pedirnos los certificados internacionales de biodegradabilidad en compost casero otorgados por TUV Austria."
    },
    {
      question: "¿Los envases de bagazo de caña de azúcar son más caros que los de plástico?",
      answer: "Sí, tienen un costo ligeramente mayor, pero el valor que agregan es significativo. No solo contribuyen a reducir la huella de carbono y el impacto ambiental, sino que también mejoran la imagen de marca al mostrar un compromiso con la sostenibilidad. Nuestro packaging agrega valor a las empresas de nuestros clientes."
    },
    {
      question: "¿Los envases son personalizables?",
      answer: "Sí, ofrecemos envases personalizables en los que se pueden hacer impresiones. Es una excelente manera de maximizar la inversión comunicando marca y frases mientras se contribuye al cuidado del medio ambiente."
    },
    {
      question: "¿Ofrecen envíos a todo el país?",
      answer: "Sí, realizamos envíos a todo el territorio nacional con cargos que varían según la región. Puedes consultar los detalles de los costos de envío en el proceso de compra."
    },
    {
      question: "¿Tienen una política de devoluciones?",
      answer: "Sí, ofrecemos cambios o devoluciones dentro de un período de 72 horas después de la compra. Si tienes algún inconveniente con el producto, puedes ponerte en contacto con nosotros y lo resolveremos a la brevedad."
    }
  ];

  return (
    <div className="accordion-container">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <span>{faq.question}</span>
            <span>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqsAccordion;