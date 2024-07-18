import React from 'react'
import { useEffect } from 'react'

const AnaliseDesconto = () => {

  function handleClick(funcao){

    if(funcao === 'copiar'){
        return window['copiarTexto']
    }else if(funcao === 'desconto'){
        return window['msg'].desconto()
    }
  }


  useEffect(() => {
    let os = [['24 HRS CORRIDAS', '24HR', 'corrido', 1], ['48 HRS CORRIDAS', '48HR', 'corrido', 2], ['72 HRS CORRIDAS', '72HR', 'corrido', 3], 
    ['3 DIAS UTEIS', '3DIAS', 'uteis', 3], ['5 DIAS UTEIS', '5DIAS', 'uteis', 5]]

    var select = document.getElementById('form_need');

    select.addEventListener('change', function() {
        let opcoesDesconto = document.getElementsByName('opcoesDesconto')[0].value

        let caixaFalhaAtraso = document.getElementById('caixaFalhaAtraso')

        if(opcoesDesconto === 'semacesso' || opcoesDesconto === 'lentidao'){

            if(document.getElementById('qtd_atraso') !== null){
                document.getElementById('qtd_atraso').remove()
            }              

            if(caixaFalhaAtraso.children.length === 0){
                let txtFalhaId = document.createElement('div');
                txtFalhaId.id = 'id_falha'
                txtFalhaId.className = 'form-group'

                let labelFalhaId = document.createElement('label');
                labelFalhaId.innerHTML = 'ID Falha (opcional)'
                labelFalhaId.setAttribute('for', 'form_name') 

                let inputFalhaId = document.createElement('input');
                inputFalhaId.setAttribute('type', 'number') 
                inputFalhaId.setAttribute('name', 'number_id') 
                inputFalhaId.className = 'form-control'

                document.getElementById('caixaFalhaAtraso').appendChild(txtFalhaId);
                document.getElementById('id_falha').appendChild(labelFalhaId)
                document.getElementById('id_falha').appendChild(inputFalhaId)
            }
        }else if(opcoesDesconto === 'atraso'){

            if(document.getElementById('id_falha') !== null){
                document.getElementById('id_falha').remove()
            } 

            if(caixaFalhaAtraso.children.length === 0){
                let divAtraso= document.createElement('div');
                divAtraso.id = 'qtd_atraso'
                divAtraso.className = 'form-group'

                let labelAtraso = document.createElement('label');
                labelAtraso.innerHTML = 'Tipo de O.S*'
                labelAtraso.setAttribute('for', 'form_os') 

                let selectAtraso = document.createElement('select');
                selectAtraso.setAttribute('id', 'form_os') 
                selectAtraso.setAttribute('name', 'opcoesAtrasoOs') 
                selectAtraso.setAttribute('required', 'required') 
                selectAtraso.className = 'form-control'

                let optionAtraso= document.createElement('option');
                optionAtraso.innerHTML = '--Selecione sua opção--'
                optionAtraso.setAttribute('value', 'null')
                optionAtraso.setAttribute('selected', '') 
                optionAtraso.setAttribute('disabled', '') 


                document.getElementById('caixaFalhaAtraso').appendChild(divAtraso);
                document.getElementById('qtd_atraso').appendChild(labelAtraso)
                document.getElementById('qtd_atraso').appendChild(selectAtraso)
                document.getElementById('form_os').appendChild(optionAtraso)

                for (let i = 0; i < os.length; i++) {
                    let optionAtraso= document.createElement('option');
                    optionAtraso.innerHTML = os[i][0]
                    optionAtraso.setAttribute('value', os[i][1])                 
                    
                    document.getElementById('form_os').appendChild(optionAtraso)

                }
            }

        }
    })
  }, [])

  return (
    <div className="container">
  <div className=" text-center mt-5 ">
    {/* <h1>Análise de desconto</h1> */}
  </div>
  <div className="row ">
    <div className="col-lg-7 mx-auto">
      <div className="card mt-2 mx-auto p-4 bg-light">
        <div className="card-body bg-light">
          <div className="container">
            <form id="contact-form">                            
              <div className="controls">
                <div className="mt-3 mb-3 ">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_need"> Tipo de desconto </label>
                      <select id="form_need" name="opcoesDesconto" className="form-control" required="required" defaultValue={'null'}>
                        <option value="null" disabled>--Selecione sua opção--</option>
                        <option value="semacesso">SEM ACESSO</option>
                        <option value="lentidao">LENTIDÃO/OSCILAÇÃO</option>
                        <option value="atraso"> ATRASO OS</option>
                      </select>                                                   
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">Data início*</label>
                      <input id="form_name" type="date" name="data_inicio" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Data fim*</label>
                      <input id="form_lastname" type="date" name="data_fim" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">Hora início*</label>
                      <input id="form_name" type="time" name="hora_inicio" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Hora fim*</label>
                      <input id="form_lastname" type="time" name="hora_fim" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6" id="valorCheio">
                    <label htmlFor="form_lastname">Valor mensalidade cheio*</label>
                    <input id="form_lastname" type="number" name="valor_mensalidade" className="form-control" />
                  </div>
                  <div className="col-md-6" id="caixaFalhaAtraso">
                    {/* gerado via javascript */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2">
                    <div className="form-group">
                      <label htmlFor="mensagem">Mensagem</label>
                      <textarea id="mensagem" name="message" className="form-control pt-1 pb-1" style={{minHeight: '180px'}} defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">                                    
                    <input type="button" className="btn btn-success btn-send p-2 btn-block mt-3" defaultValue="Gerar Mensagem" onClick={()=>handleClick('desconto')}/>                                                                                   
                    <input id="copiar" type="button" className="btn btn-primary p-2 btn-send btn-block mt-3" defaultValue="Copiar" onClick={handleClick('copiar')}/>                                                                                   
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default AnaliseDesconto