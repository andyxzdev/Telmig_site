import connectedHome from '../assets/images/facial-recognition-collage-concept.webp'
import entertainment from '../assets/images/woman-enjoying-movie-night.webp'
import support from '../assets/images/close-up-employee-server-hub-coordinating-technicians-using-mic.webp'

// Para adicionar uma publicação, inclua um objeto com slug único e suas seções.
const blogPosts = [
  {
    slug: 'uma-rotina-mais-conectada-em-casa',
    category: 'Vida conectada',
    title: 'Uma rotina mais conectada em casa',
    excerpt: 'Trabalho, estudos e lazer: pequenas escolhas para organizar o uso da internet no seu dia a dia.',
    banner: connectedHome,
    bannerAlt: 'Homem utilizando um celular em casa',
    sections: [
      {
        title: 'Cada casa tem seu próprio ritmo',
        paragraphs: [
          'Uma chamada de trabalho pela manhã, uma aula à tarde e um filme à noite. A internet participa de diferentes momentos da rotina, e entender como sua família utiliza a conexão é um bom ponto de partida para organizar esses momentos.',
          'Pense nos dispositivos que costumam estar conectados e nas atividades mais importantes para cada pessoa. Essa conversa ajuda a identificar o que merece atenção na hora de planejar o uso da internet em casa.',
        ],
      },
      {
        title: 'Organize seu espaço e seus horários',
        paragraphs: [
          'Separar um local para estudar ou trabalhar pode ajudar a manter o foco. Antes de uma reunião ou aula, confira os materiais necessários e deixe os aplicativos que serão utilizados preparados.',
          'Reserve também momentos para se desconectar. Uma rotina digital organizada inclui pausas e espaço para atividades fora das telas.',
        ],
      },
      {
        title: 'Escolha de acordo com suas necessidades',
        paragraphs: [
          'Ao comparar planos, considere o perfil de uso da casa e tire dúvidas sobre instalação, equipamentos, disponibilidade no endereço e atendimento. O objetivo é entender a oferta completa antes de decidir.',
          'Os canais de contato apresentados no site podem ser utilizados para conversar sobre suas necessidades e confirmar as condições disponíveis para sua região.',
        ],
      },
    ],
  },
  {
    slug: 'entretenimento-para-aproveitar-em-familia',
    category: 'Entretenimento',
    title: 'Entretenimento para aproveitar em família',
    excerpt: 'Ideias para transformar filmes, músicas e conteúdos digitais em momentos compartilhados.',
    banner: entertainment,
    bannerAlt: 'Mulher sorrindo enquanto utiliza um tablet',
    sections: [
      {
        title: 'Comece escolhendo o momento',
        paragraphs: [
          'Uma noite de cinema em casa pode começar antes de apertar o play. Escolher o filme juntos, preparar um lanche e combinar um horário transforma uma atividade cotidiana em uma ocasião para estar perto de quem você gosta.',
          'Vale alternar quem escolhe o conteúdo a cada encontro. Assim, todos têm a oportunidade de compartilhar seus gostos e conhecer novas histórias.',
        ],
      },
      {
        title: 'Há espaço para diferentes interesses',
        paragraphs: [
          'Filmes e séries são apenas parte das possibilidades. Músicas, podcasts e conteúdos educativos também podem fazer parte desses momentos, respeitando a faixa etária e os interesses de cada pessoa.',
          'Uma playlist montada em conjunto ou uma conversa sobre o que foi assistido são formas simples de continuar a experiência para além da tela.',
        ],
      },
      {
        title: 'Confira as condições de cada aplicativo',
        paragraphs: [
          'Antes de utilizar um serviço, confira a assinatura necessária, os dispositivos compatíveis e as regras do aplicativo. Catálogos e condições dependem de cada fornecedor.',
          'Se houver interesse em aplicativos associados ao plano de internet, confirme quais opções estão incluídas na oferta e quais precisam ser contratadas separadamente.',
        ],
      },
    ],
  },
  {
    slug: 'como-se-preparar-para-um-atendimento',
    category: 'Atendimento',
    title: 'Como se preparar para um atendimento',
    excerpt: 'Saiba quais informações ajudam a explicar sua dúvida e organizar uma solicitação de suporte.',
    banner: support,
    bannerAlt: 'Profissional de atendimento utilizando um headset',
    sections: [
      {
        title: 'Explique o que está acontecendo',
        paragraphs: [
          'Ao pedir ajuda, descreva com suas palavras o que aconteceu e quando a situação começou. Dizer se a dúvida envolve conexão, fatura ou contratação ajuda a direcionar a conversa.',
          'Se houver uma mensagem de erro, anote seu conteúdo. Explique também se a situação acontece sempre ou em momentos específicos, sem compartilhar senhas ou informações sensíveis desnecessárias.',
        ],
      },
      {
        title: 'Reúna informações úteis',
        paragraphs: [
          'Em dúvidas sobre a conexão, pode ser útil informar quais dispositivos estão envolvidos e se outros aparelhos apresentam o mesmo comportamento. Em dúvidas sobre uma fatura, tenha a referência do documento em mãos.',
          'Utilize os canais oficiais e confirme o destinatário antes de enviar documentos ou dados pessoais. Nunca compartilhe a senha de aplicativos de terceiros para solicitar atendimento.',
        ],
      },
      {
        title: 'Acompanhe a orientação recebida',
        paragraphs: [
          'Guarde o protocolo, quando fornecido, e as orientações recebidas. Se precisar retomar o contato, essas informações ajudam a apresentar o histórico da solicitação.',
          'Os canais de atendimento da Telmig estão disponíveis na seção Fale conosco. Confira o canal adequado para sua necessidade e as condições de atendimento com a equipe.',
        ],
      },
    ],
  },
]

export default blogPosts
