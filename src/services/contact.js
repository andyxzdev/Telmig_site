import api from './api.js'

export async function sendContactMessage(data) {
  if (!api.defaults.baseURL) {
    const error = new Error('O envio de mensagens ainda não está disponível. Utilize nossos canais de atendimento.')
    error.code = 'API_NOT_CONFIGURED'
    throw error
  }

  const response = await api.post('/contato', {
    nome: data.nome.trim(),
    telefone: data.telefone.replace(/\D/g, ''),
    email: data.email.trim(),
    mensagem: data.mensagem.trim(),
  })

  return response.data
}
