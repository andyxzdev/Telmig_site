import LegalPage from './components/LegalPage.jsx'

const sections = [
  {
    title: 'Objeto destes termos',
    paragraphs: [
      'Estes termos apresentam as condições de uso do site Telmig, que reúne informações sobre planos, cobertura, aplicativos, canais de atendimento e materiais para consulta. A identificação completa da empresa responsável deverá ser incluída antes da publicação definitiva.',
      'Este documento regula a navegação no site. As condições de prestação do serviço de internet devem constar da oferta aplicável e do contrato efetivamente celebrado, respeitada a legislação vigente.',
    ],
  },
  {
    title: 'Uso responsável',
    paragraphs: [
      'Utilize o site de forma lícita e respeitosa. Não tente obter acesso não autorizado, interferir no funcionamento do serviço, distribuir arquivos maliciosos ou utilizar formulários para mensagens abusivas ou conteúdo ilegal.',
      'Ao solicitar atendimento, informe dados corretos e apenas informações que você esteja autorizado a compartilhar. Não envie senhas ou dados sensíveis desnecessários.',
    ],
  },
  {
    title: 'Planos e contratação',
    paragraphs: [
      'Consulte os detalhes do plano, disponibilidade técnica no endereço, valores, benefícios, instalação, eventuais condições promocionais e demais condições antes de contratar. O clique em um botão de interesse ou o envio de uma mensagem não substitui a formalização da contratação.',
      'A apresentação de informações neste site deve observar as regras de transparência e de vinculação da oferta. Estes termos não afastam direitos assegurados pelo Código de Defesa do Consumidor nem autorizam o descumprimento de condições efetivamente ofertadas.',
    ],
  },
  {
    title: 'Conteúdos de demonstração',
    paragraphs: [
      'Nesta versão do site, a pesquisa por CEP apresenta respostas simuladas e não confirma cobertura real. Os comentários identificados como avaliações ilustrativas são exemplos, não avaliações de clientes obtidas do Google.',
      'O PDF identificado como arquivo de exemplo serve para demonstrar o download e não constitui contrato ou comprovante de contratação. Consulte o documento oficial e as condições informadas pela empresa para qualquer contratação.',
      'Banners e conteúdos provisórios deverão ser substituídos ou confirmados antes da divulgação de ofertas definitivas. A repetição de um banner no carrossel não representa benefícios adicionais.',
    ],
  },
  {
    title: 'Atendimento e funcionalidades',
    paragraphs: [
      'O formulário de contato ainda não está habilitado para envio nesta versão. A mensagem só deve ser considerada encaminhada quando o canal estiver disponível e apresentar confirmação. Os demais canais dependem dos links e serviços disponibilizados pela empresa.',
      'A Central do assinante e os aplicativos podem exigir cadastro e autenticação em ambientes próprios. O acesso e a disponibilidade dessas funcionalidades devem ser confirmados nos canais oficiais.',
    ],
  },
  {
    title: 'Aplicativos e links de terceiros',
    paragraphs: [
      'Aplicativos, redes sociais e serviços acessados por links externos possuem condições próprias. A inclusão de uma marca ou logotipo não significa que todos os seus serviços estejam incluídos em qualquer plano. Verifique a oferta específica e as regras do fornecedor.',
      'Antes de fornecer dados ou realizar pagamentos fora deste site, confirme o destino do link e consulte os termos e a política de privacidade do serviço acessado.',
    ],
  },
  {
    title: 'Conteúdo e propriedade intelectual',
    paragraphs: [
      'Textos, imagens, marcas e demais materiais podem ser protegidos por direitos de seus respectivos titulares. O acesso ao site não concede autorização ampla para reprodução, distribuição ou exploração comercial desses materiais.',
      'Os usos permitidos pela legislação permanecem preservados. Pedidos de autorização ou comunicações sobre conteúdo podem ser encaminhados pelo contato informado nesta página.',
    ],
  },
  {
    title: 'Disponibilidade e responsabilidade',
    paragraphs: [
      'O site pode passar por manutenção, atualização ou interrupções técnicas. Caso uma informação ou função não esteja disponível, utilize os canais de atendimento apresentados para obter orientação.',
      'Não há garantia de funcionamento ininterrupto do site. Esta previsão não exclui responsabilidades previstas em lei, não limita direitos do consumidor e não altera obrigações de um serviço contratado.',
    ],
  },
  {
    title: 'Privacidade',
    paragraphs: [
      'O tratamento de dados pessoais relacionado ao site é apresentado na Política de Privacidade, disponível no rodapé. A navegação não constitui consentimento automático para finalidades que dependam de autorização específica.',
    ],
  },
  {
    title: 'Alterações e contato',
    paragraphs: [
      'Estes termos poderão ser atualizados para refletir mudanças no site ou na legislação. A versão e a data de atualização estarão disponíveis nesta página. Alterações não afastam condições contratuais já assumidas nem direitos previstos em lei.',
      'Para dúvidas sobre o uso do site, utilize o e-mail indicado ao final desta página. Aplicam-se as leis brasileiras e as regras legais de competência, inclusive as de proteção ao consumidor.',
    ],
  },
]

function TermsOfUse() {
  return (
    <LegalPage
      title="Termos de Uso"
      introduction="Conheça as condições de navegação no site Telmig e as informações sobre seus conteúdos, funcionalidades, canais de atendimento e materiais disponíveis."
      sections={sections}
      references={[{ label: 'Código de Defesa do Consumidor', href: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' }]}
    />
  )
}

export default TermsOfUse
