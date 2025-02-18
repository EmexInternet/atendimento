class Multa{
    constructor(){
    
    }

    gerarMulta(){

        const valor = document.getElementById('valor').value
        const data_venda = moment(document.getElementById('data').value, 'YYYY-MM-DD').format('L')
        const data_cancelamento = moment(document.getElementById('dataCancelamento').value, 'YYYY-MM-DD').format('L')



        if(valor !== ''  && document.getElementById('data').value !== ''){

                if(moment(data_cancelamento, "DD/MM/YYYY").isAfter(moment(data_venda, "DD/MM/YYYY"))){
                    const dia_atual = data_cancelamento.split('/')[0];
                    const mes_atual = data_cancelamento.split('/')[1];
                    const ano_atual = data_cancelamento.split('/')[2];

                    const dataDaquiA12Meses = moment(document.getElementById('data').value, 'YYYY-MM-DD').add(12, 'months').format('L');
                    const dataFimTeste = moment(document.getElementById('data').value, 'YYYY-MM-DD').add(7, 'days').format('L')


                    if(moment(data_cancelamento, "DD/MM/YYYY").isAfter(moment(dataFimTeste, "DD/MM/YYYY"))){

                        console.log(dataFimTeste)

                        let qtd_meses_pagos = Math.round(moment(data_cancelamento, "DD/MM/YYYY").diff(moment(data_venda, "DD/MM/YYYY"), "months"))
                        console.log(qtd_meses_pagos)
    
                    
                        const meses_restantes = 12 - qtd_meses_pagos
    
                        if(meses_restantes <= 0){
                            console.log('Cliente já saiu da fidelidade')
                            document.getElementById('mensagem').value = ''
                            alert('Cliente já saiu da fidelidade')
                        }else{
                            const calculo_multa = (Math.abs(parseFloat(valor.replace("R$", "").trim()))) / 12 * meses_restantes
    
                            let plural_singular = ''
    
                            if(meses_restantes == 1){
                                plural_singular = `${meses_restantes} MES RESTANTE`
                            }else{
                                plural_singular = `${meses_restantes} MESES RESTANTES`
                            }
    
                            console.log(calculo_multa)
    
                            document.getElementById('mensagem').value = `CALCULO DA MULTA RESCISÓRIA\n\n`+
                                                                        `DATA DE VENDA: ${data_venda}\n`+
                                                                        `DATA DE CANCELAMENTO: ${data_cancelamento}\n`+
                                                                        `VALOR DO BENEFÍCIO: ${valor}\n\n`+
                                                                        `${plural_singular} PARA O FIM DO CONTRATO FIDELIDADE\n\n`+
                                                                        `VALOR DA MULTA RESCISÓRIA: R$ ${calculo_multa.toFixed(2)}`
                        }

                    }else{
                        alert('Cliente está no período de desistência')
                        document.getElementById('mensagem').value = ''
                    }
                    
                }else{
                    alert('Data venda é maior ou igual que a data atual, por favor corrija!')
                    document.getElementById('mensagem').value = ''
                }
        }else{
            alert('Preencha os campos devidamente!')
            document.getElementById('mensagem').value = ''
        }

    }
}

var multa = new Multa()