import LegalPage from './components/LegalPage.jsx'

const sections = [
  {
    title: 'Abrangência e responsável',
    paragraphs: [
      'Esta política trata do uso de dados pessoais neste site da marca Telmig. Razão social, CNPJ, endereço do responsável pelo tratamento e canal específico de privacidade ainda devem ser inseridos e confirmados pela empresa.',
      'Serviços de internet contratados, aplicativos de terceiros e a Central do assinante podem ter documentos próprios. Quando houver acesso a outro serviço, consulte também a política aplicável a ele.',
    ],
  },
  {
    title: 'Dados informados no site',
    paragraphs: [
      'O formulário de contato solicita nome, telefone, e-mail e mensagem. Informe apenas os dados necessários ao atendimento e evite incluir senhas, documentos ou informações sensíveis na mensagem.',
      'Na versão atual, o envio pelo formulário ainda não está habilitado. O preenchimento, por si só, não envia a mensagem por e-mail. Quando o atendimento pelo site for ativado, os dados serão encaminhados ao serviço responsável pelo processamento da solicitação.',
      'A consulta de cobertura usa o CEP digitado para gerar uma resposta local de demonstração. Nesta versão, ela não consulta uma base real de cobertura nem envia o CEP a um serviço externo.',
    ],
  },
  {
    title: 'Finalidades e bases legais',
    paragraphs: [
      'Quando o canal de contato estiver ativo, os dados recebidos serão utilizados para responder à mensagem, esclarecer dúvidas, atender solicitações e, quando solicitado pelo titular, dar andamento a procedimentos anteriores a uma contratação.',
      'A base legal deverá corresponder a cada finalidade: procedimentos relacionados a contrato solicitados pelo titular, cumprimento de obrigação legal ou, quando aplicável, consentimento. Outras hipóteses, como legítimo interesse, exigem análise do caso e respeito aos direitos do titular. A simples navegação não representa consentimento para publicidade.',
    ],
  },
  {
    title: 'Navegação, cookies e registros técnicos',
    paragraphs: [
      'O código atual do site não implementa ferramentas de publicidade, análise de audiência ou cookies de rastreamento. A infraestrutura de hospedagem poderá processar registros técnicos de acesso, como endereço IP e horário, conforme sua configuração e as obrigações aplicáveis.',
      'Ao fechar o aviso de cookies e privacidade, uma preferência é salva no armazenamento local do seu navegador para evitar que o aviso reapareça em novas visitas. Esse registro não é enviado a um servidor e não representa consentimento para publicidade ou rastreamento. Você pode removê-lo ao limpar os dados deste site nas configurações do navegador.',
      'Se ferramentas adicionais forem adotadas, esta política deverá informar suas finalidades, fornecedores e formas de gerenciamento. Quando necessário, será disponibilizada uma escolha específica antes de tecnologias opcionais serem ativadas.',
    ],
  },
  {
    title: 'Compartilhamento e serviços externos',
    paragraphs: [
      'O funcionamento do atendimento poderá envolver fornecedores de hospedagem e de envio de mensagens, conforme os serviços efetivamente contratados. Esses fornecedores, sua localização e eventuais transferências internacionais deverão ser informados quando a integração estiver definida.',
      'Ao abrir WhatsApp, aplicativo de e-mail ou outro link externo, você passa a interagir com o respectivo serviço, que poderá tratar dados segundo suas próprias regras. O site não solicita a senha desses serviços.',
      'A seção de localização incorpora um mapa do Google Maps. Ao carregar o mapa, seu navegador se conecta ao Google, que pode receber dados técnicos, como endereço IP e informações do navegador, e utilizar cookies conforme suas próprias políticas. Consulte a política de privacidade do Google em https://policies.google.com/privacy.',
    ],
  },
  {
    title: 'Conservação e proteção dos dados',
    paragraphs: [
      'Os critérios e prazos de retenção das mensagens deverão ser definidos de acordo com a finalidade do atendimento, as obrigações legais e a necessidade de exercício de direitos. Nenhum prazo específico de armazenamento foi estabelecido nesta versão inicial.',
      'A operação do atendimento deverá adotar medidas técnicas e administrativas compatíveis com os dados tratados, incluindo controle de acesso. Nenhum sistema oferece segurança absoluta. Não encaminhe credenciais ou informações desnecessárias pelos canais de contato.',
    ],
  },
  {
    title: 'Seus direitos',
    paragraphs: [
      'Nos termos da LGPD e conforme as condições aplicáveis, você pode solicitar confirmação do tratamento, acesso, correção, informações sobre compartilhamento, anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente, além de portabilidade e revisão de decisões automatizadas quando cabíveis.',
      'Quando o tratamento depender de consentimento, você poderá revogá-lo e solicitar a eliminação correspondente, observadas as hipóteses legais de conservação. Uma solicitação pode exigir confirmação de identidade, limitada ao necessário para proteger seus dados. Também é possível apresentar reclamação à autoridade competente.',
    ],
  },
  {
    title: 'Contato e atualizações',
    paragraphs: [
      'Até a definição do canal específico de privacidade, utilize o contato informado ao final desta página para encaminhar dúvidas ou pedidos relacionados a dados pessoais. A empresa deverá confirmar esse canal antes da publicação definitiva.',
      'Esta política será atualizada quando houver mudanças relevantes nas funcionalidades ou no tratamento de dados. A data no início da página identifica a versão apresentada.',
    ],
  },
]

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Política de Privacidade"
      introduction="Este documento explica quais informações podem ser utilizadas durante o acesso ao site Telmig, para quais finalidades e como encaminhar dúvidas e solicitações sobre seus dados pessoais."
      sections={sections}
      references={[{ label: 'Lei Geral de Proteção de Dados (LGPD)', href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm' }]}
    />
  )
}

export default PrivacyPolicy
