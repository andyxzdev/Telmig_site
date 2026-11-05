const testCoverage = {
  '01001000': 'available',
  '20040002': 'expanding',
  '30140071': 'unavailable',
}

const messages = {
  available: 'Temos cobertura de fibra óptica para este CEP.',
  expanding: 'Estamos expandindo nossa rede para esta região.',
  unavailable: 'Ainda não temos cobertura para este CEP.',
}

export function formatCep(value) {
  return value.replace(/\D/g, '').slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2')
}

export function checkTestCoverage(value) {
  const cep = value.replace(/\D/g, '')

  if (!/^\d{8}$/.test(cep)) {
    return { error: 'Digite um CEP com 8 dígitos.' }
  }

  // Respostas locais de teste; substituir pela consulta real quando disponível.
  const scenarios = ['available', 'expanding', 'unavailable']
  const checksum = [...cep].reduce((sum, digit) => sum + Number(digit), 0)
  const status = testCoverage[cep] ?? scenarios[checksum % scenarios.length]

  return {
    status,
    message: `Simulação para o CEP ${formatCep(cep)}: ${messages[status]}`,
  }
}
