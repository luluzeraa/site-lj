function calcularOrcamento() {
    // Obtém os valores de largura e comprimento
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
  
    // Verifica se os valores são válidos
    if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
      document.getElementById('resultado').textContent = 'Por favor, insira valores válidos para largura e comprimento.';
      return;
    }
  
    // Cálculo do custo
    const precoPorMetroQuadrado = 100;
    const area = largura * comprimento;
    const custoTotal = area * precoPorMetroQuadrado;
  
    // Exibe o resultado
    document.getElementById('resultado').textContent = `O custo total do tapete é R$ ${custoTotal.toFixed(2)}.`;
  }