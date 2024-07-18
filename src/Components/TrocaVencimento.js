import React from 'react'

const TrocaVencimento = () => {

    

    function handleClick(funcao){

        if(funcao === 'copiar'){
            return window['copiarTexto']
        }else if(funcao === 'alterarmenormaior'){
            return window['vencimento'].alterarModo(true)
        }else if(funcao === 'alterarmaiormenor'){
            return window['vencimento'].alterarModo(false)
        }else if(funcao === 'menormaior'){
            return window['vencimento'].menorMaior()
        }
    }
    
    
    function teste(){
        document.getElementById('botao-gerar').setAttribute('onclick', "vencimento.menorMaior()")
    }

  return (
    <div onLoad={()=>teste()} className="container py-5">
        <div className="row">
            <div className="col-lg-7 mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-5 w-auto auto">
                <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                    <li className="nav-item">
                    <button id="btn-menor-maior" data-toggle="pill" className="nav-link active rounded-pill" onClick={()=>handleClick('alterarmenormaior')}>
                        MENOR PRA MAIOR
                    </button>
                    </li>
                    <li className="nav-item">
                    <button id="btn-maior-menor" data-toggle="pill" className="nav-link rounded-pill" onClick={()=>handleClick('alterarmaiormenor')}>
                        MAIOR PRA MENOR
                    </button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="nav-tab-card" className="tab-pane fade show active">
                    <div className="row">
                        <div className="col-sm-8">
                        <div className="form-group">
                            <label><span className="hidden-xs">Dia de vencimento*</span></label>
                            <div className="input-group">
                            <input type="number" placeholder="Antigo" name="dia_antigo" className="form-control" required />
                            <input type="number" placeholder="Novo" name="dia_novo" className="form-control" required />
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="form-group mb-4">
                            <label data-toggle="tooltip" title="Three-digits code on the back of your card">Data contato*</label>
                            <input type="date" name="data_contato" required className="form-control" min="2024-01-01"/>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="form-group">
                            <label><span className="hidden-xs">Valor c/ desconto*</span></label>
                            <div className="input-group">
                            <input type="number" placeholder="Valor" name="valor_desconto" className="form-control" required />
                            </div>
                        </div>
                        </div>
                    </div>            
                    </div>
                    <div className="col-md-12 mt-3 mb-2">
                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" name="message" className="form-control pt-1 pb-1 mb-3 mt-1" style={{minHeight: '300px'}} defaultValue={""} />
                    </div>
                    </div>
                    <button id="botao-gerar" type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm " style={{width: '100px', height: '40px'}} onClick={() => handleClick('menormaior')} >Gerar</button>
                    <input id="copiar" type="button" className="subscribe btn btn-secondary btn-block rounded-pill shadow-sm" style={{width: '100px', height: '40px',  marginLeft: '5px'}} onClick={handleClick('copiar')} defaultValue="Copiar" />
                </div>
                </div>
            </div>
        </div>
    </div>
  
  )
}

export default TrocaVencimento