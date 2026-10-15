
enum StatusPedido{
    ProcessandoPagamento = "Processando Pagamento",
    AguardandoEnvio = "Aguardando Envio",
    Enviado = "Enviado",
    Entregue = "Entregue",
}

const statusAtual: StatusPedido = StatusPedido.Entregue;

console.log(`Status atual do pedido: ${statusAtual}`);