"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["ProcessandoPagamento"] = "Processando Pagamento";
    StatusPedido["AguardandoEnvio"] = "Aguardando Envio";
    StatusPedido["Enviado"] = "Enviado";
    StatusPedido["Entregue"] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
const statusAtual = StatusPedido.Entregue;
console.log(`Status atual do pedido: ${statusAtual}`);
