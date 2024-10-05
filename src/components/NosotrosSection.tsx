export default function NosotrosSection() {
  return (
    <section className="bg-white">
      <a id="nosotros"></a>
      <div className="max-w-[1440px] mx-auto lg:py-28">
        <div className="hidden lg:flex items-center justify-center w-full bg-contain bg-center bg-no-repeat bg-[url('./home/somos-text.svg')]">
          <img
            className="w-1/2"
            src="/home/Photo-group-desktop.png"
            alt="GoBio biodegradable packaging with food"
          />
        </div>   
        
      </div>
        <div className="lg:flex lg:items-center lg:justify-between  py-8 px-4 sm:px-6 lg:px-12">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-lg xs:text-3xl sm:text-2xl md:text-3xl mb-2 font-light">Nosotros</h2>
            <h3 className="text-2xl xs:text-4xl sm:text-4xl mb-8 mt-2 font-medium">
              Vos también podes elegir mejor. <span className="text-green-500 font-semibold">Elegí GoBio.</span>
            </h3>
            <div className="mt-4 text-xs xs:text-xl lg:text-sm text-gray-600 leading-5">
              <p>
                GoBio nace de la convicción de emprendedores en que revertir el
                daño causado por el uso del plástico es posible.
              </p>
              <p>
                Trabajando en restaurantes, detectamos la urgencia de combatir los
                residuos eternos y decidimos crear GoBio.
              </p>
              <p>
                GoBio es la respuesta e invitación para revertir el impacto nocivo de
                los plásticos en el medioambiente. Desarrollamos envases para
                alimentos que son 100% biodegradables y estamos convencidos que
                es sólo el comienzo.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-2xl shadow-lg aspect-square"
              src="/home/Nosotros-desktop.png"
              alt="GoBio biodegradable packaging with food"
            />
          </div>
        </div>
    </section>
  )
}