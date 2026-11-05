# Integração do formulário de contato

O frontend está preparado para enviar `POST /contato` com Axios. Não há backend ou envio de e-mail implementado.

Copie `.env.example` para `.env.local`, configure `VITE_API_URL` com a URL pública do backend e reinicie o Vite. Sem essa configuração, nenhuma requisição de contato será feita.

Payload JSON:

```json
{
  "nome": "Nome do cliente",
  "telefone": "31999999999",
  "email": "cliente@example.com",
  "mensagem": "Mensagem do cliente"
}
```

O frontend mantém os dados em caso de falha e considera a requisição bem-sucedida quando recebe uma resposta HTTP 2xx. O backend deverá responder com sucesso somente após processar ou aceitar o envio, e usar status 4xx/5xx em caso de erro. O timeout é de 15 segundos.

No futuro backend:

- Validar novamente os campos e limitar requisições.
- Configurar CORS para o domínio do site.
- Definir o e-mail destinatário e as credenciais de envio em variáveis exclusivas do servidor.
- Enviar a mensagem ao destinatário configurado.

Não colocar credenciais de e-mail em variáveis `VITE_`: elas são públicas no frontend. O e-mail exibido na seção de contato não define o destinatário do formulário.
