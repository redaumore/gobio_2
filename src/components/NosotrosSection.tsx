export default function NosotrosSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <a id="nosotros"></a>
      <div className="max-w-[1440px] mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="xs:text-3xl sm:text-2xl md:text-3xl mb-2 font-light">Nosotros</h2>
            <h3 className="text-xl xs:text-4xl sm:text-4xl mb-8 mt-2 font-medium">
              Vos también podes ser parte. <br />
              Elegí mejor. <span className="text-green-500 font-semibold">Elegí GoBio.</span>
            </h3>
            <div className="mt-4 text-xs xs:text-xl text-gray-600">
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
              className="w-full rounded-4xl shadow-lg aspect-square"
              src="/home/Nosotros-desktop.png"
              alt="GoBio biodegradable packaging with food"
            />
          </div>
        </div>
      </div>
    </section>
  )
}