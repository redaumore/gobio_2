import React from 'react'

interface TextImageBlockProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imageFirst?: boolean
}

const TextImageBlock: React.FC<TextImageBlockProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imageFirst = false
}) => {
  const textContent = (
    <div className="flex flex-col justify-center py-4 px-6 ">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {description.split('#').map((paragraph, index) => (
        <p key={index} className="text-white text-base font-normal leading-snug">
          {paragraph.replace(/#+/, '')}
        </p>
      ))}
    </div>
  )

  const imageContent = (
    <div className="flex items-center justify-center p-6 rounded w-5/6 h-5/6">
      <div className="flex border-gradient rounded-[25px] w-full h-full max-w-sm max-h-sm aspect-square">
        <div className="rounded-3xl bg-gray-200 border-gradient-content w-full">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row">
      {imageFirst ? (
        <>
          <div className="flex justify-center md:w-1/3 order-2 md:order-1">{imageContent}</div>
          <div className="md:w-2/3 order-1 flex items-center md:order-2">{textContent}</div>
        </>
      ) : (
        <>
          <div className="md:w-2/3 flex items-center">{textContent}</div>
          <div className="flex justify-center md:w-1/3">{imageContent}</div>
        </>
      )}
    </div>
  )
}

const AliadosGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto text-white bg-gray-900">
      <div className="space-y-12">
        <TextImageBlock
          title="Four Seasons Hotels and Resorts"
          description="Decidieron no quedarse atrás e incorporar nuestros envases en su comedor interno.
          #Durante la pandemia no era posible usar vajilla reutilizable y pudimos brindarles la solución de packaging descartable ecológico y no generar residuos plásticos en su comedor. Seguimos hasta el día de hoy trabajando continuamente con ellos."
          imageSrc="/aliados/four-seasons-2-logo.svg"
          imageAlt="Four Seasons Hotels and Resorts Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="Total Energies"
          description="Reemplazamos los vasos utilizados en el consumo interno de Total Energies por vasos compostables impresos con su identidad.
          #Esta solución reduce el impacto ambiental de la empresa y también les permite comunicar de manera efectiva a sus empleados su compromiso con la sostenibilidad, integrando este cambio ecológico en su día a día."
          imageSrc="/aliados/total-energies.jpg"
          imageAlt="Total Energies Logo"
          imageFirst={true}
        />
        <TextImageBlock
          title="Tea Connection"
          description="Tea Connection es un restaurante reconocido en la ciudad de Buenos Aires y desde hace varios meses trabajamos con ellos en las cartas de invierno, reemplazando packaging de plástico por envases ecológicos de GoBio.  "
          imageSrc="/aliados/tea-connection-logo.svg"
          imageAlt="Tea Connection Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="Aeropuertos Argentina 2000"
          description="Aeropuertos Argentina 2000 es gestora de la mayor cantidad de aeropuertos de nuestro país.
          #El trabajo nuestro viene siendo reemplazar el packaging tóxico de todos los aeropuertos, empezando por Ezeiza, con un plan de 3 etapas donde en una primera instancia cubrimos el consumo interno del personal, luego un trabajo para el resto del aeropuerto y finalmente reemplazar los vasos plásticos de los aviones por los nuestros hechos con materiales compostables."
          imageSrc="/aliados/aa2000-logo.svg"
          imageAlt="Aeropuertos Argentina 2000 Logo"
          imageFirst={true}
        />
        <TextImageBlock
          title="Terma"
          description="Terma es una marca de bebidas a base de hierbas con la cual trabajamos de manera esporádica en eventos masivos que organizan. 
          #Reparten sus bebidas en los vasos de GoBio personalizados y creemos que estas acciones ayudan a que las empresas se sigan sumando al cambio y reemplacen sus plásticos de un solo uso."
          imageSrc="/aliados/terma.jpeg"
          imageAlt="Termna Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="Orei"
          description="En el rubro de la gastronomía, Orei es un local que tiene todo su consumo de clientes en la vía pública. 
          #Nuestro trabajo consiste en brindarles bowls y estuches descartables ecológicos para su comida. 
          #Porque los desechos van directo a los tachos públicos y contar con una solución no tóxica para el ambiente es crucial en estos casos donde el impacto negativo de los plásticos sería muy notorio."
          imageSrc="/aliados/orei-logo.png"
          imageAlt="Orei Logo"
          imageFirst={true}
        />
        <TextImageBlock
          title="Refugio Lynch - Bariloche"
          description="Restaurante de montaña en Bariloche que ha adoptado los envases compostables de GoBio. 
          #Esta elección refleja su compromiso con el entorno natural que lo rodea, garantizando que cada comida servida en sus instalaciones tenga un menor impacto ambiental."
          imageSrc="/aliados/refugio-lynch.jpg"
          imageAlt="Refugio Lynch - Bariloche Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="Alparamis"
          description="En el rubro de la decoración trabajamos con Alparamis, una gran tienda de venta de objetos al por menor que recientemente abrió las puertas de su cafetería en Olivos y pudimos solucionar su necesidad total de envases, cubiertos y revolvedores sustentables."
          imageSrc="/aliados/alparmis-logo.svg"
          imageAlt="Alparamis Logo"
          imageFirst={true}
        />
        <TextImageBlock
          title="Poke & Roll"
          description="Adaptación de diseño gráfico de logo en bowls de 1000ml para ensaladas."
          imageSrc="/aliados/poke-roll.jpg"
          imageAlt="Poke And Roll Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="Universal Assistance"
          description="Desarrollo de vasos compostables con logo y frase que indica que los mismos son biodegradables.
          #Maximizar la inversión en packaging bio a través de la comunicación impresa es la mejor idea!"
          imageSrc="/aliados/universal-assistance.jpg"
          imageAlt="Universal Assistance Logo"
          imageFirst={true}
        />
        <TextImageBlock
          title="El Club de la Milanesa"
          description="En GoBio Ecoenvases somos los encargados de proveer los cubiertos de madera para el consumo en patios de comida de shoppings.
          #Estos cubiertos no solo refuerzan el compromiso de la marca con el ambiente sino que también ofrecen una experiencia de calidad a sus clientes."
          imageSrc="/aliados/club-de-la-milanesa-logo.svg"
          imageAlt="El Club de la Milanesa Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="Parque Nacional Talampaya"
          description="Trabajar con reservas naturales para nosotros es una cuestión muy importante y nos enorgullece que Volterra, la administración del Parque Nacional Talampaya se haya comunicado con nosotros. 
          #Esta reserva está ubicada en la provincia de La Rioja y desde hace un tiempo en el parque únicamente se utilizan vasos de Gobio.
          #Creemos que son un ejemplo a seguir porque con algo tan simple como reemplazar los vasos de plástico por vasos biodegradables están ayudando muchísimo al ambiente y al cuidado del parque, y por sobre todo generando conciencia. "
          imageSrc="/aliados/talampaya-logo.svg"
          imageAlt="Parque Nacional Talampaya Logo"
          imageFirst={true}
        />
        <TextImageBlock
          title="Tremun"
          description="A lo largo y ancho del país trabajamos con la cadena hotelera Tremun. Los hoteles son para consumidores de distintos perfiles, pero todos con el objetivo de cuidar el ambiente y generar valor para sus clientes. 
          #El trabajo es continuo con la cadena de hoteles ya que venimos desde el 2023 reemplazando de a un hotel por vez el packaging hasta llegar a que la cadena entera sea 100% sustentable."
          imageSrc="/aliados/tremun-logo.svg"
          imageAlt="Tremun Logo"
          imageFirst={false}
        />
        <TextImageBlock
          title="PSA"
          description="Desarrollamos vasos 100% compostables personalizados con logo para el uso interno de PSA :)"
          imageSrc="/aliados/PSA.jpg"
          imageAlt="PSA Logo"
          imageFirst={true}
        />
      </div>
    </div>
  )
}

export default AliadosGrid