import educationBanner from '../../../assets/banners/banner-elite-C9jALuP7.jpg'
import plan2gBanner from '../../../assets/banners/medium-shot-smiley-woman-with-laptop.webp'
import symmetricBanner from '../../../assets/banners/young-beautiful-girl-uses-laptop-cafe-surfing-internet.webp'
import dedicatedLinkBanner from '../../../assets/banners/business-people-using-internet.webp'
import backupPowerBanner from '../../../assets/banners/hologram-projector-screen-with-cloud-system-technology.webp'
import meshBanner from '../../../assets/banners/mesh-home-network.svg'
import phoneBanner from '../../../assets/banners/woman-with-phone-surfing-social-media.webp'
import { companyLinks } from '../../../data/companyLinks.js'

const contactLink = (subject) => `${companyLinks.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre ${subject}.`)}`

// As imagens são fundos sem textos; título, descrição e botão são renderizados no código.
const partnerBanners = [
  {
    id: 'elite',
    image: educationBanner,
    title: 'Parceria Elite Educação',
    description: 'Quem é cliente Telmig tem 30% de desconto em cursos de Informática, Robótica, Inglês e cursos profissionalizantes com a Elite Educação.',
    buttonText: 'GARANTIR DESCONTO',
    href: 'https://eliteeducacao.com.br/',
  },
  {
    id: 'plano-2g',
    image: plan2gBanner,
    title: '2 Giga de velocidade com Wi-Fi 7',
    description: 'Conheça o plano de 2 Gbps com tecnologia Wi-Fi 7. Consulte valores, equipamentos e disponibilidade para o seu endereço.',
    buttonText: 'CONHECER PLANO 2G',
    href: contactLink('o plano de 2 Gbps com Wi-Fi 7'),
  },
  {
    id: 'velocidade-simetrica',
    image: symmetricBanner,
    title: 'Sua velocidade, nos dois sentidos',
    description: 'Nos planos de 600, 800 e 1000 Mega, a velocidade de upload é igual à de download. Consulte as condições. O plano de 2 Gbps não faz parte desta modalidade.',
    buttonText: 'VER PLANOS SIMÉTRICOS',
    href: '#planos',
  },
  {
    id: 'link-dedicado',
    image: dedicatedLinkBanner,
    title: 'Link dedicado para sua empresa',
    description: 'Converse com a Telmig sobre uma solução de conectividade dedicada às necessidades do seu negócio. Consulte condições e viabilidade técnica.',
    buttonText: 'SOLICITAR PROPOSTA',
    href: contactLink('link dedicado para minha empresa'),
  },
  {
    id: 'energia',
    image: backupPowerBanner,
    title: 'Energia de reserva para seu roteador',
    description: 'Imagina se você pudesse ter um roteador que fica ligado e conectado mesmo quando a luz acaba? Com o mini nobreak, a internet pode continuar funcionando. Consulte equipamentos e autonomia. A conexão também depende da energia da rede externa.',
    buttonText: 'CONHECER A SOLUÇÃO',
    href: contactLink('a solução de energia de reserva para o roteador'),
  },
  {
    id: 'rede-mesh',
    image: meshBanner,
    title: 'Conheça a rede mesh',
    description: 'Leve o sinal Wi-Fi a diferentes pontos da casa com dois roteadores mesh conectados. Fale com a equipe sobre os equipamentos e a configuração ideal para o seu espaço.',
    buttonText: 'SABER MAIS',
    href: `${companyLinks.whatsapp}?text=${encodeURIComponent('Oi, vim pelo Site e gostaria de mais informações sobre a rede Mesh.')}`,
  },
  {
    id: 'telefone-fixo',
    image: phoneBanner,
    title: 'Telefone fixo com a Telmig',
    description: 'Ligações ilimitadas para todo o Brasil. Consulte os planos de telefonia fixa, valores e condições disponíveis para sua casa ou empresa.',
    buttonText: 'CONSULTAR TELEFONIA',
    href: contactLink('telefone fixo'),
  },
]

export default partnerBanners
