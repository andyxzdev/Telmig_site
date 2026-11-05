import { MapPin, Navigation } from 'lucide-react'
import Button from '../../../components/Button.jsx'

const address = 'Rua Setecentos e Quarenta e Um, nº 155, Bairro Jardim Vitória, CEP: 31970-636, Belo Horizonte - MG'
const mapQuery = encodeURIComponent('Rua Setecentos e Quarenta e Um, 155, Jardim Vitória, Belo Horizonte - MG, 31970-636')

function LocationSection() {
  return (
    <section id="localizacao" className="bg-background px-6 pt-[112px] pb-20" aria-labelledby="location-title">
      <h2 id="location-title" className="text-center text-[36px] leading-tight font-bold tracking-[-0.8px] text-white max-[600px]:text-[28px]">
        Onde <span className="text-title">estamos</span>
      </h2>

      <div className="mx-auto mt-12 grid max-w-[1120px] grid-cols-[0.8fr_1.2fr] gap-8 max-[800px]:grid-cols-1">
        <div className="flex flex-col items-start justify-center rounded-[24px] bg-[#222827] p-8 max-[600px]:p-6">
          <MapPin className="size-9 text-title" aria-hidden="true" />
          <h3 className="mt-5 text-xl font-bold text-white">Telmig</h3>
          <address className="mt-4 text-sm leading-7 text-white/75 not-italic">{address}</address>
          <Button
            href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 min-h-11! min-w-0! gap-2 rounded-lg! bg-title! text-background!"
          >
            <Navigation className="size-4" aria-hidden="true" />
            Como chegar
          </Button>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-[24px] bg-[#222827] max-[600px]:min-h-[300px]">
          <iframe
            src={`https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`}
            title="Localização da Telmig no Google Maps"
            className="block h-full min-h-[360px] w-full border-0 max-[600px]:min-h-[300px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default LocationSection
